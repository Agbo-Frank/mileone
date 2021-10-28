var Product = require('../model/Product')
var User = require('../model/User')
var Comments = require('../model/Comments')

module.exports.makeComment = (req, res) => {
    var userId = req.user
    var { message, id } = req.body

    Comments.create({
        itemId: id,
        userId,
        message
    })
        .then(comment => {
            User.findOne({ _id: userId })
                .then(user => {
                    Comments.updateOne({ _id: comment._id}, {
                        $set: {
                            userInfo: {
                                image: user.image,
                                _id: user._id,
                                name: user.name
                            }
                        }
                    })
                        .then(result => {
                            res.status(200).json({msg: "you've made a comment"})
                        })
                        .catch(err => {
                            res.status(400)
                        })
                })
                .catch(err => {
                    res.status(400)
                })
        })
        .catch(err => {
            res.status(400)
        })
}

module.exports.likeComment = (req, res) => {
    var commentId = req.params.id
    var userId = req.user 

    Comments.findOne({ _id: commentId })
        .then(comment => {
            if(comment.likes.includes(userId)){
                Comments.updateOne({ _id: commentId }, {
                    $pull: {
                        likes:  userId
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
                Comments.updateOne({ _id: commentId }, {
                    $addToSet: {
                        likes:  userId
                    }
                })
                    .then(like => {
                        res.status(200).json({msg: "you've liked this comment"})
                    })
                    .catch(err => {
                        res.status(400).json({ err })
                    })
            }
        })
        .catch(err => {
            res.status(400).json({ err,
            errmsg: "couldn't find item" })
        })
}

module.exports.delComment = (req, res) => {
    var userId = req.user

    Comments.findOne({ userId })
        .then(comment => {
            if(comment){
                Comments.findOneAndRemove({ _id: comment.id })
                    .then(del => {
                        res.status(200).json({ msg : "comment deleted"})
                    })
                    .catch(err => {
                        res.status(400).json({ msg : "comment not deleted"})
                    })
            }
        })
        .catch(comment => {
            res.status(400).json({msg: 'no comment to delete'})
        })
}

module.exports.replyComment = (req, res) => {
    var userId = req.user
    var commentId = req.params.id
    var { message } = req.body

    User.findOne({ _id: userId })
        .then(user => {
            Comments.updateOne({ _id: commentId }, {
                $addToSet: {
                    reply: {
                        message,
                        id: user._id,
                        name: user.name,
                        image: user.image
                    }
                }
            })
                .then(comment => {
                    res.status(200).json({msg: 'you have replied to the comment'})
                })
                .catch(comment => {
                    res.status(400).json({msg: 'unale to reply'})
                })
        })
        .catch(err => {
            res.status(400)
        })
}

module.exports.delReply = (req, res) => {
    var userId = req.user
    var replyId = req.params.id

    Comments.findOne({ userId })
        .then(comment => {
            if(comment){
                Comments.updateOne({ _id: commentId }, {
                    $pull: {
                        reply: {
                            _id: replyId
                        }
                    }
                })
                    .then(comment => {
                        res.status(200).json({msg: 'you have replied to the comment'})
                    })
                    .catch(comment => {
                        res.status(400).json({msg: 'unale to reply'})
                    })
            }     
        })
        .catch(comment => {
            res.status(400).json({msg: 'no comment to delete'})
        })       
}