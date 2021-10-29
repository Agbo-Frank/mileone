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

    var pipeLine = [
        {
            $match:{
                userId
            }
        },
        {
            $project: {
                cart: 1
            }
        },
        {
            $unwind: {
                path: "$cart"
            }
        },
        {
            $lookup: {
                from: 'products',
                localField: 'cart.itemId',
                foreignField: 'productId',
                as: 'cartItems'
              }
        },
        {
            $addFields: {
                quantity: "$cart.quantity"
            }
        },
        {
            $project: {
                cartItems: 1,
                quantity:1
              }
        }
    ]

    User.aggregate(pipeLine)
        .then(product => {
            res.status(200).json({ product })
        })
        .catch(err => {
            res.status(400)
        })
}