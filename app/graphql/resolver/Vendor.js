const User = require('../../model/User')
const Vendor = require('../../model/Vendor')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cloudinary = require('../../utils/cloudinary')
const { returnVendor }= require('../functions')

function createToken(id){
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 2
    });
}

module.exports = {
    getVendor: ({vendorId}) => {
        return Vendor.findOne({_id: vendorId})
                .then(user => {
                    return returnVendor(user._doc)
                })
                .catch(err => {throw err})
    },
    getVendors: () => {
        return Vendor.find({ })
            .then(users => {
                return users.map(user => returnVendor(user._doc))
            })
    },
    getVendorsLoc: ({lat, lon}) => {
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
    createVendor: async ({input}) => {
        try{
            let newUser;
            const date = new Date()
            const { name, 
                email, 
                password, 
                cordinates, 
                address, 
                biography,
                linkedIn,
                facebook,
                youtub,
                instagram,
                twitter,
                pnumber,
                img,
                logo,
            } = input
            
            let coords = cordinates.split(",")
            //coords[0] = lat
            //coords[1] = long
            const contacts = [
                {
                    media: 'facbook',
                    link: facebook
                },
                {
                    media: 'linkedIn',
                    link: linkedIn
                },
                {
                    media: 'facbook',
                    link: facebook
                },
                {
                    media: 'youtube',
                    link: youtub
                },
                {
                    media: 'instagram',
                    link: instagram
                },
                {
                    media: 'twitter',
                    link: twitter
                },
                {
                    media: 'phone Number',
                    link: pnumber
                }
            ]
    
            if(!email || !password || !cordinates){
                throw new Error("please enter your all fields")
            }
            let u = await User.findOne({email})
            if(u){
                throw new Error("this user already exist")
            }
            let vendor = await Vendor.findOne({ email })

            if(vendor){
                throw new Error("this user already exist")
            }
            
            newUser = new Vendor({
                name, email, 
                password, biography,
                contacts, address,
                location:{
                    coordinates: [coords[0], coords[1]]
                },
                img: "",
                logo: ""
            })
                
            const salt =  bcrypt.genSaltSync(10);
            const hash =  bcrypt.hashSync(password, salt);

            newUser.password = hash

            let option = {
                folder: "MiloOne/LandingImage/", 
                public_id: date.now(),
                resource_type: "auto"
            }

            if(logo && img){
                cloudinary.uploader.upload(img, option, (error, res1) =>{
                    cloudinary.uploader.upload(logo, {
                        ...option,
                        folder: "MiloOne/Logos/",
                        chuck
                    }, (error, res2) =>{
                        newUser.img = res1.public_id
                        newUser.logo = res2.public_id
                    })
                })
            }
            else if(logo && img===''){
                cloudinary.uploader.upload(logo, (error, res1) =>{
                    newUser.logo = res1
                })
            }
            else if(logo === '' && img){
                cloudinary.uploader.upload(img, (error, res1) =>{
                    newUser.img = res1
                })
            }

            const savedUser = await newUser.save()

            let token = createToken(savedUser.id)

            return {
                token,
                user: {
                    ...savedUser._doc
                }
            }
        }
        catch(err){
            throw err
        }
    }         
}
