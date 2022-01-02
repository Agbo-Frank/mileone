const User = require('../../model/User')
const Vendor = require('../../model/Vendor')


module.exports = {
    follow: async ({vendorId}) => {
        try{
            if(!req.isAuth){
                throw new Error('Unauthorized')
            }
            const userId = req.user
            let user = await User.findOne({_id: userId})

            if(user.following.includes(vendorId)){
                let upUser = await User.updateOne({ _id: userId}, {
                    $pull: {
                        following: vendorId
                    }
                })
                let upVendor = await Vendor.updateOne({ _id: vendorId }, {
                    $pull: {
                        followers: userId
                    }
                })
                if(upUser && upVendor){
                    return {
                        message: "Unfollowed"
                    }
                }
            }
            else{
                let upUser = await User.updateOne({ _id: userId}, {
                    $addToSet: {
                        following: vendorId
                    }
                })
                let upVendor = await Vendor.updateOne({ _id: vendorId}, {
                    $addToSet: {
                        followers: userId
                    }
                })
                if(upUser && upVendor){
                    return {
                        message: "followed"
                    }
                }
            }
        }
        catch(err){
            throw new Error(err)
        }
    }
}