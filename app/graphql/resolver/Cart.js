var User = require('../../model/User')

module.exports = {
    addToCart: ({itemId}, req) => {
        if(!req.isAuth){
            throw new Error('Unauthorized')
        }
        const userId = req.user
       return User.updateOne({ _id: userId}, {
            $addToSet: {
                cart: {
                    itemId 
                }
            }
        })
            .then(result => {
                return result.acknowledged && {message: "successfully added"}
            })
            .catch(err => {
                throw err
            })
    },
    removeFromCart: ({itemId}, req) => {
        if(!req.isAuth){
            throw new Error('Unauthorized')
        }
        const userId = req.user
        return User.updateOne({ _id: userId}, {
            $pull: {
                cart: {
                    itemId 
                }
            }
        })
            .then(result => {
                return result.acknowledged && {message: `${itemId} successfully removed`}
            })
            .catch(err => {
                throw err
            })
    }
}