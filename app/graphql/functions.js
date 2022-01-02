const User = require('../model/User')
const Vendor = require('../model/Vendor')
const Comment = require('../model/Comments')
const Product = require('../model/Product')

function returnProduct(product){
    return {
        ...product._doc,
        _id: product._doc._id,
        vendor: () => {
            return Vendor.findOne({_id: product._doc.vendorId})
        },
        comments: returnComment(product._doc._id)
    }
}

function returnComment(id){
    return Comment.find({itemId: id})
            .then(comments => {
                return comments.map(comment => {
                    return {
                        ...comment._doc,
                        user: () => {
                            return User.findOne({_id: comment._doc.userId})
                        }
                    }
                })
            })
}

function returnUser(user){
    return {
        ...user,
        // _id: user._id,
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

function returnVendor(user){
    return {
        ...user,
        products: () => {
            return Product.find({vendorId: user._id})
        }
    }
}

module.exports = {
    returnComment, 
    returnProduct, 
    returnUser,
    returnVendor
    }