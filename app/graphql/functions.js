const User = require('../model/User')
const Vendor = require('../model/Vendor')
const Comment = require('../model/Comments')

function returnProduct(product){
    return {
        ...product._doc,
        _id: product._doc._id,
        vendor: () => {
            return Vendor.find({_id: product._doc.vendorId})
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

module.exports = {returnComment, returnProduct}