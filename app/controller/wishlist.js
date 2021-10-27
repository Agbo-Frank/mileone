var User = require('../model/User')
var Product = require('../model/Product')

module.exports.addToWishlist = (req, res) => {
    var userId = req.user
    var { id } = req.body

    User.updateOne({ _id: userId}, {
        $addToSet: {
            wishlist: id
        }
    })
        .then(user => {
            res.status(200).json({msg: "successfully added"})
        })
        .catch(err => {
            res.status(400).json({errmsg: "unsuccessful"})
        })
}
module.exports.removeFromWishlist = (req, res) => {
    var userId = req.user
    var { id } = req.params

    User.updateOne({ _id: userId}, {
        $pull: {
            wishlist: id
        }
    })
        .then(user => {
            res.status(200).json({msg: "removed successfully"})
        })
        .catch(err => {
            res.status(400).json({errmsg: "unsuccessful"})
        })
}
module.exports.getWishlist = (req, res) => {
    var userId = req.user

    User.findById(userId)
        .then(user => {
            Product.find({ _id: user.wishlist})
                .exec((err, product) => {
                    if(err){
                        res.status(400)
                    }
                    else{
                        res.status(200).json({ product })
                    }
                })
        })
        .catch(err => {
            res.status(400).json({errmsg: "User Not Found"})
        })
}