var User = require('../model/User')
var Product = require('../model/Product')

module.exports.addToCart = (req, res) => {
    var userId = req.user
    var { id, quantity } = req.body

    User.updateOne({ _id: userId}, {
        $addToSet: {
            cart: {
                itemId: id,
                quantity 
            }
        }
    })
        .then(user => {
            res.status(200).json({msg: "successfully added"})
        })
        .catch(err => {
            res.status(400).json({errmsg: "unsuccessful"})
        })
}
module.exports.removeFromCart = (req, res) => {
    var userId = req.user
    var { id } = req.params

    User.updateOne({ _id: userId}, {
        $pull: {
            cart: {
                itemId: id 
            }
        }
    })
        .then(user => {
            res.status(200).json({msg: "removed successfully"})
        })
        .catch(err => {
            res.status(400).json({errmsg: "unsuccessful"})
        })
}
module.exports.getCart = (req, res) => {
    var userId = req.user

    User.findById(userId)
        .then(user => {
            var cart = user.cart.map(item => {
                return item.itemId
            })
            var quantity = user.cart.map(item => {
                return item.quantity
            })
            Product.find({ _id: cart})
                .select('-comments')
                .exec((err, product) => {
                    if(err){
                        res.status(400)
                    }
                    else{
                        res.status(200).json({ product, quantity })
                    }
                })
        })
        .catch(err => {
            res.status(400).json({errmsg: "User Not Found"})
        })
}