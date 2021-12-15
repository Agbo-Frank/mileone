const User = require('../../model/User')
const Vendor = require('../../model/Vendor')

module.exports = {
    getVendor: (args)=> {
        return Vendor.findById(args.id)
                .then(user => {
                    return {
                        ...user._doc,
                        _id: user._doc._id,
                        follower: () => {
                            let ids = user._doc.followers
                            return User.find({_id: ids})
                        }
                    }
                })
                .catch(err => {throw err})
    },
    getVendors: ({lat, lon}) => {
        return Vendor.aggregate([
            {
                $geoNear: {
                    near: {
                        type: "Point",
                        coordinates: [
                            lat,
                            lon
                        ]
                    },
                    key: "location",
                    distanceField: "dist.distance",
                    maxDistance: 100000,
                    spherical: true
                }
            }
        ])
            // .then(users => {
            //         return users.map(user => {
            //             return {
            //             ...user._doc,
            //             _id: user.id,
            //             follower: () => {
            //                 let ids = user._doc.followers
            //                 return User.find({_id: ids})
            //             },
            //         }   
            //     })
            // })
            // .catch(err => {throw err})
    },
}