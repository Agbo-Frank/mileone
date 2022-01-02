var User = require('../../model/User')

module.exports = {
    removeFromWishlist: async ({itemId}, req) => {
        try{
            if(!req.isAuth){
                throw new Error('Unauthorized')
            }
            const userId = req.user
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
    addToWishlist: async ({itemId}, req) => {
        try{
            if(!req.isAuth){
                throw new Error('Unauthorized')
            }
            const userId = req.user
            let result = await User.updateOne({ _id: userId}, {
                $addToSet: {
                    wishlist: itemId
                }
            })
            if(result){
                return result.acknowledged && {message: "successfully added"}
            }
        }
        catch(err){
            throw err
        }
    }
}