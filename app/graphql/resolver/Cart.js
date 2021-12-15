var User = require('../../model/User')

module.exports = {
    addToCart: ({itemId, quantity, userId}) => {
       return User.updateOne({ _id: userId}, {
            $addToSet: {
                cart: {
                    itemId,
                    quantity 
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
    removeFromCart: ({itemId, userId}) => {
        return User.updateOne({ _id: userId}, {
            $pull: {
                cart: {
                    itemId 
                }
            }
        })
            .then(result => {
                return result.acknowledged && {message: "successfully removed"}
            })
            .catch(err => {
                throw err
            })
    }
}