var User = require('../../model/User')

module.exports = {
    removeFromWishlist: async ({userId, itemId}) => {
        try{
           let result = await User.updateOne({ _id: userId}, {
                                $pull: {
                                    wishlist: itemId
                                }
                            })
            return result.acknowledged && {message: "removed successfully"}                
        }
        catch(err){
            throw err
        }
    },
    addToWishlist: async ({userId, itemId}) => {
        try{
            let result = await User.updateOne({ _id: userId}, {
                                $addToSet: {
                                    wishlist: itemId
                                }
                            })
            return result.acknowledged && {message: "successfully added"}
        }
        catch(err){
            throw err
        }
    }
}