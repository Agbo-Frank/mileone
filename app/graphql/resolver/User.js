const User = require('../../model/User')
const Vendor = require('../../model/Vendor')
const Product = require('../../model/Product')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {returnUser} = require('../functions')

function createToken(id){
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 2
    });
}

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
            console.log(err)
            throw err
        }
    },
    loginUser: async ({email, password}) => {
        try {
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
                            error: ""
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
                        error: ""
                    }
                }
            }
            } catch (error) {
                throw error
            }
    },
    createUser: async ({email, password}) => {
        if(!email && !password){
            return {
                token: "",
                user: {},
                error: "Please Enter All fields"
            }
        }
        else{
            try {
                let user = await User.findOne({ email })
                if(user){
                    return {
                        token: "",
                        user: {},
                        vendor: {},
                        error: "User with the email already exists"
                    }
                }
                else {
                    var newUser = new User({
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
                        error: ""
                    }       
                }
            } catch (error) {
                throw error
            }
        }        
    }
}