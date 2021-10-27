var Vendor = require('../model/Vendor')
var User = require('../model/User')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt')
var geoCoder = require('../utils/geoCoder')
require('dotenv').config()

function createToken(id){
    return jwt.sign({ id }, process.env.JWT_SECRET);
}
var coordinates = []

module.exports.createVendor = async (req, res) => {
    var { name, email, password, biography, contacts, location } = req.body

    if(Array.isArray(location)){
        coordinates = [ ...location ]
    }
    else{
        const coords = await geoCoder.geocode(location);
        coordinates = [ ...coords ]
    }

    var {name, email, password, contacts, location} = req.body
    if(!email && !password && !location){
        res.status(400).json({error: {
            email: "please enter the company's email",
            password: 'please enter your password',
            location: 'please enter your location'
        }})
    }
    else if(!email){
        res.status(400).json({error: {
            email: "please enter the company's email",
            password: '',
            location: ''
        }})
    }
    else if(!password){
        res.status(400).json({error: {
            email: '',
            password: 'please enter your password',
            location: ''
        }})
    }
    else if(!location){
        res.status(400).json({error: {
            email: '',
            password: '',
            location: 'please enter your location'
        }})
    }
    else {
        Vendor.findOne({ email })
          .then(user => {
              if(user){
                  res.status(400).json({error: {
                    email: 'this user already exist',
                    password: '',
                    location: ''
                  }})
              }
              else{
                var newUser = new Vendor({
                    name, email, 
                    password, biography,
                    contacts,
                    location:{
                        coordinates: [coordinates[0].latitude, coordinates[0].longitude]
                    }
                })
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        newUser.password = hash
        
                        newUser.save()
                          .then(user => {
                             var token = createToken(user._id)
                             res.status(200).json({
                                 token,
                                 user: {
                                     name: user.name,
                                     email: user.email,
                                     biography: user.biography,
                                     contacts: {
                                         ...user.contacts
                                     },
                                     location: {
                                         ...user.location,
                                         coordinates: [
                                            user.location.coordinates
                                         ]
                                     },
                                     followers: user.followers,
                                     id: user._id
                                 }
                             })
        
                          })
                          .catch(err => {
                              if(err.code === 16755 && err.index === 0){
                              res.status(400).json({errmsg: 'Please enter a valid  location'})}
                          })
                    });
                });
              }
          })
          .catch(err => console.log(err))
    }


}

module.exports.getVendors = (req, res) => {
    var { lat, long} = req.query

    Vendor.aggregate([
        {
            $geoNear: {
                near: {
                    type: "Point",
                    coordinates: [
                        parseFloat(lat),
                        parseFloat(long)
                    ]
                },
                key: "location",
                distanceField: "dist.distance",
                maxDistance: 100000,
                spherical: true
            }
        }
    ])
    .then(vendor => {
        res.status(200).json({ vendor })
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({errmsg: "couldn't retrive data"})
    })
}

module.exports.getFollowers = (req, res) => {
    var userId = req.user

    Vendor.findById(userId)
        .then(user => {
            User.find({ _id: user.followers})
                .then(user => {
                    if(!user){
                        res.status(200).json({ msg: 'no follower' })
                    }
                    res.status(200).json({ user })
                })
                .catch(err => {
                    res.status(400)
                })
        })
        .catch(err => {
            res.status(400).json({ errmsg: 'user does not exist' })
        })
}
