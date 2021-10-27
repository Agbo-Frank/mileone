var Product = require('../model/Product')
var Comments = require('../model/Comments')

module.exports.makeComment = (req, res) => {
    var userId = req.user
    var itemId = req.params.id
    var { message } = req.body

    Comments.create({
        itemId,
        userId,
        message
    })
        .then(comment => {
            console.log(comment)
        })
        .catch(err => {
            console.log(err)
        })

    // Product.findOne({ _id: itemId })
    //     .then(product => {
    //         Product.updateOne({ _id: itemId },{
    //             $addToSet: {
    //                 comments: {
    //                     $each: [{
    //                         userId,
    //                         message
    //                     }]
    //                 } 
    //             }
    //         })
    //             .then(comment => {
    //                 res.status(200).json({ comment })
    //             })
    //             .catch(err => {
    //                 res.status(400).json({errmsg: 'please try again'})
    //             })
    //     })
    //     .catch(err => {
    //         res.status(400).json({errmsg: "couldn't find product"})
    //     })
}

module.exports.likeComment = (req, res) => {
    var itemId = req.params.id
    var userId = req.user
    var commentId = req.body.id

    Product.findOne({ _id: itemId })
        .then(product => {
            product.comments.map(comment => {
                if(comment._id === commentId){
                    if(comment.likes.includes(userId)){
                        Product.updateOne({ _id: itemId }, {
                            $set: {
                                comments: {
                                    likes: {
                                        $pull: userId
                                    }
                                }
                            }
                        })
                            .then(unlike => {
                                res.status(200).json({msg: "you've unliked this comment"})
                            })
                            .catch(err => {
                                res.status(400).json({ err })
                            })
                    }
                    else{
                        Product.updateOne({ _id: itemId }, {
                            $set: {
                                comments: {
                                    likes: {
                                        $addToSet: userId
                                    }
                                }
                            }
                        })
                            .then(unlike => {
                                res.status(200).json({msg: "you've liked this comment"})
                            })
                            .catch(err => {
                                res.status(400).json({ err })
                            })
                    }
                }
            })
        })
        .catch(err => {
            res.status(400).json({ err,
            errmsg: "couldn't find item" })
        })
}