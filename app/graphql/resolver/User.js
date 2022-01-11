const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const bcrypt = require('bcrypt')
const User = require('../../model/User')
const Vendor = require('../../model/Vendor')
const {returnUser} = require('../functions')
require('dotenv').config()

function createToken(id){
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 2
    });
}

const client = new OAuth2Client(process.env.CLIENT_ID)

module.exports = {
    getUser: async (args, req) => {
        try{
            if(!req.isAuth){
                throw new Error('Unauthorized')
            }
            const userId = req.user
            let user = await User.findOne({_id: userId})
            if(!user){
                throw new Error('User not found')
            }
            return returnUser(user._doc)
        }
        catch(err){
            throw err
        }
    },
    loginUser: async ({email, password}) => {
        try {
            if(!email || !password){
                throw new Error("Please Enter All fields")
            }
            let user = await User.findOne({ email })

            if(!user){
                let vendor = await Vendor.findOne({ email })
                if(!vendor){
                    throw new Error("this user does not exist")
                }
                else{
                    let match = await bcrypt.compare(password, vendor._doc.password)
                    if(!match){
                        throw new Error("incorrect password")
                    }
                    else{
                        let token = createToken(vendor._id)
                        console.log(token)
                        return {
                            token,
                            user: null,
                            vendor: vendor._doc,
                        }
                    }
                }

            }
            else{
                let match = await bcrypt.compare(password, user._doc.password)
                if(!match){
                    throw new Error("incorrect password")
                }
                else{
                    let token = createToken(user.id)
                    return {
                        token: token,
                        user: returnUser(user._doc),
                        vendor: {},
                    }
                }
            }
            } catch (error) {
                throw error
            }
    },
    createUser: async ({email, password}) => {
        if(!email || !password){
            throw new Error('Please Enter All fields')
        }
        else{
            try {
                let user = await User.findOne({ email })
                if(user){
                    throw new Error('User with the email already exist')
                }
                else {
                    const newUser = new User({
                        email, password
                    })

                    const salt =  bcrypt.genSaltSync(10);
                    const hash =  bcrypt.hashSync(password, salt);

                    newUser.password = hash
                    
                    const savedUser = await newUser.save()
                    let token = createToken(savedUser.id)
                    return {
                        token: token,
                        user: returnUser(savedUser._doc),
                        vendor: {},
                    }       
                }
            } catch(error){
                throw error
            }
        }       
    },
    googleLogin: async ({ tokenId, actionType }) => {
        try{
            const ticket = await client.verifyIdToken({
                idToken: tokenId,
                audience: process.env.CLIENT_ID
            });

            const { name, email, picture } = ticket.getPayload();    

            if(actionType === 'login'){
                let user = await User.findOne({ email })

                if(!user){
                    throw new Error('User does not exist')
                }

                let token = createToken(user._doc._id)
                    return {
                        token,
                        user: returnUser(user._doc),
                        vendor: {}
                    }
            } 
            else if(actionType === 'register'){
                let user = await User.findOne({ email })

                if(user){
                    throw new Error('User already exist')
                }

                const newUser = new User({
                    email, name, image: picture
                })

                const savedUser = await newUser.save()
                let token = createToken(savedUser._doc._id)
                return {
                    token: token,
                    user: returnUser(savedUser._doc),
                    vendor: {}
                }
            }  
        }
        catch(err){
            throw err
        }
    },
    forgetPassword: async ({ email }) => {
        try{
            //generate a new password 
            let newPassword = Math.random() * 10000000
            newPassword = parseInt(newPassword)
            newPassword = String(newPassword)

            //hash the password 
            const salt =  bcrypt.genSaltSync(10);
            const hash =  bcrypt.hashSync(newPassword, salt);

            let user = await User.findOne({ email })
            if(user){
                let result = await User.updateOne({ email },{
                    $set: {
                        password: hash
                    }
                })
                return result.acknowledged && {message: `this is your new password ${newPassword}`}
            }
            else{
                let vendor = await Vendor.findOne({ email })

                if(vendor){
                    let result = await Vendor.updateOne({ email },{
                        $set: {
                            password: hash
                        }
                    })
                    return result.acknowledged && {message: `this is your new password ${newPassword}`}
                }
                else{
                    return {message: `this User Does not exist`}
                }
            }
        }
        catch(err){
            throw err
        }
    }
}