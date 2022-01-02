var Product = require('../../model/Product')
var User = require('../../model/User')
var Comments = require('../../model/Comments')


module.exports = {
    makeComment: async ({message, itemId}, req) => {
        try{
            if(!req.isAuth){
                throw new Error('Unauthorized')
            }
            const userId = req.user
            let user = await User.findOne({ _id: userId })

            if(user){
                    let comment = await Comments.create({itemId, message})
                    return {
                        ...comment._doc,
                        _id: comment._doc._id,
                        userId,
                        user: {...user._doc}
                    }
            }
            else{
                throw "Please Login"
            }
        }
        catch(err){
            throw err
        }
    },
    likeComment: async ({commentId}, req) => {
        try{
            if(!req.isAuth){
                throw new Error('Unauthorized')
            }
            const userId = req.user
            let comment = await Comments.findOne({ _id: commentId })
            if(comment.likes.includes(userId)){
                let result = await Comments.updateOne({ _id: commentId }, {
                                        $pull: {
                                            likes:  userId
                                        }
                                    })
                                    return result.acknowledged && {message: "successfully unliked this comment"}                  
            }
            else{
                let result = await Comments.updateOne({ _id: commentId }, {
                    $addToSet: {
                        likes:  userId
                    }
                })
                return result.acknowledged && {message: "successfully liked this comment"}
            }    
        }
        catch(err){
            throw err
        }
    },
    delComment: async ({commentId}, req) => {
        try{
            if(!req.isAuth){
                throw new Error('Unauthorized')
            }
            const userId = req.user
            let comment = await Comments.findOne({ _id: commentId })
            if(comment._doc.userId === userId){
                let result = await Comments.findOneAndRemove({ _id: commentId })
                return result.acknowledged && {message: "successfully deleted"}
            }
        }
        catch(err){
            throw err
        }
    }
}