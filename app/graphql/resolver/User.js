const User = require('../../model/User')
const Vendor = require('../../model/Vendor')
const Product = require('../../model/Product')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

function createToken(id){
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 2
    });
}

function returnUser(user){
    return {
        ...user,
        _id: user._id,
        cart: () => {
            return user.cart.map(cart => {
                    return {
                        ...cart._doc,
                        product: () => {
                        return Product.findOne({_id: cart._doc.itemId})
                                .then(product => {
                                    return product
                                })
                                .catch(err=> {
                                    throw err
                                })
                        } 
                    }
                })
        },
        wishlists: () => {
            let ids = user.wishlist
            return Product.find({_id: ids})
        },
        followings: () => {
        let ids = user.following
        return Vendor.find({_id: ids})
        }
    }
}

module.exports = {
    getUser: args => {
        return User.findById(args.id)
                .then(user => {
                    return returnUser(user._doc)
                })
                .catch(err => {throw err})
    },
    loginUser: async ({email, password}) => {
        if(!email && !password){
            throw "Please Enter All fields"
        }
        else if(!email){
            throw "Please Enter your Email"
        }
        else if(!password){
            throw "Please Enter your password"
        }
        else {
            try {
                let user = await User.findOne({ email })

                if(!user){
                    let vendor = await Vendor.findOne({ email })
                    if(!vendor){
                        return {
                            token: "",
                            user: {},
                            error: "this user does not exist"
                        }
                    }
                    else{
                        let match = await bcrypt.compare(password, vendor._doc.password)
                        if(!match){
                            return {
                                token: "",
                                user: {},
                                error: "incorrect password"
                            }
                        }
                        if(match){
                            let token = createToken(vendor._id)
                            return {
                                token,
                                user: returnUser(vendor),
                                error: ""
                            }
                        }
                    }
    
                }
                else{
                    let match = await bcrypt.compare(password, user._doc.password)
                    if(!match){
                        return {
                            token: "",
                            user: {},
                            error: "incorrect password"
                        }
                    }
                    if(match){
                        let token = createToken(user.id)
                        return {
                            token: token,
                            user: returnUser(user._doc),
                            error: ""
                        }
                    }
                }
            } catch (error) {
                throw error
            }
            
        }
    },
    createUser: async ({email, password}) => {
        if(!email && !password){
            throw "Please Enter All fields"
        }
        else if(!email){
            throw "Please Enter your Email"
        }
        else if(!email){
            throw "Please Enter your password"
        }
        else{
            try {
                let user = await User.findOne({ email })
                if(user){
                    return {
                        token: "",
                        user: {},
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
                        error: ""
                    }       
                }
            } catch (error) {
                throw error
            }
        }        
    }
}