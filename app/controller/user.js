var User = require('../model/User')
var Vendor = require('../model/Vendor')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt')
require('dotenv').config()

function createToken(id){
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

module.exports.createUser = (req, res) => {
    var {email, password} = req.body
    if(!email && !password){
        res.status(400).json({error: {
            email: 'please enter your email',
            password: 'please enter your password'
        }})
    }
    else if(!email){
        res.status(400).json({error: {
            email: 'please enter your email',
            password: ''
        }})
    }
    else if(!password){
        res.status(400).json({error: {
            email: '',
            password: 'please enter your password'
        }})
    }
    else {
        User.findOne({ email })
          .then(user => {
              if(user){
                  res.status(400).json({error: {
                    email: 'this user already exist',
                    password: ''
                  }})
              }
              else{
                var newUser = new User({
                    email, password
                })
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(password, salt, function(err, hash) {
                        newUser.password = hash
        
                        newUser.save()
                          .then(user => {
                             User.updateOne({ _id: user._id}, {
                                userId:user._id  
                            })
                                .then(result => {
                                    var token = createToken(user._id)
                                    res.status(200).json({
                                        token,
                                       user: {
                                           name: user.name,
                                           image: user.image,
                                           cart: user.cart,
                                           wishlist: user.wishlist,
                                           email: user.email,
                                           following: user.following,
                                           history: user.history,
                                           id: user._id
                                       }
                                    })
                                })
                                .catch(err => {
                                    res.status(400)
                                })
                          })
                          .catch(err => {
                              console.log(err);
                              res.status(400).json({errmsg: err})
                          })
                    });
                });
              }
          })
          .catch(err => {
              console.log(err)
          })
    }
}

module.exports.editUser = (req, res) => {
    var image = req.file
    var userId = req.user 
    var{ name, email } = req.body

    User.findOne({ _id: userId})
        .then(user => {
            User.updateOne({
                name: name || user.name,
                email: email || user.email
            })
                .then(resp => {
                    if(resp.acknowledged){
                        res.status(200).json({ msg: 'update successfull'})
                    }    
                })
                .catch(err => {
                    res.status(400).json({ msg: 'update unsuccessfull'})
                })
        })
        .catch(err => {
            res.status(400).json({ msg: 'user not found'})
        })
}

module.exports.getUser = (req, res) => {
    var userId = req.user 

    User.findById(userId)
        .then(user => {
            res.status(200).json({user})
        })
        .catch(err => {
            res.status(400).json({errmsg: err})
        })
}

module.exports.follow = (req, res) => {
    var userId = req.user
    var vendorId = req.body.id

    User.findById(userId)
        .exec((err, user) => {
            if(err){
                res.status(400).json({msg: 'user not found'})
            }
            else{
                if(user.following.includes(vendorId)){
                    User.updateOne({ _id: userId}, {
                        $pull: {
                            following: vendorId
                        }
                    })
                        .then(user => {
                            Vendor.updateOne({ _id: vendorId }, {
                                $pull: {
                                    followers: userId
                                }
                            })
                                .then(user => {
                                    res.status(200).json({msg: "removed successfully"})
                                })
                                .catch(err => {
                                    res.status(400).json({errmsg: "unsuccessful"})
                                })
                        })
                        .catch(err => {
                            res.status(400).json({errmsg: "unsuccessful"})
                        })
                }
                else{
                    User.updateOne({ _id: userId}, {
                        $addToSet: {
                            following: vendorId
                        }
                    })
                        .then(user => {
                            Vendor.updateOne({ _id: vendorId}, {
                                $addToSet: {
                                    followers: userId
                                }
                            })
                                .then(user => {
                                    res.status(200).json({msg: "added successfully"})
                                })
                                .catch(err => {
                                    res.status(400).json({errmsg: "unsuccessful"})
                                })
                        })
                        .catch(err => {
                            res.status(400).json({errmsg: "unsuccessful"})
                        })
                }
            }
        })
}
module.exports.getFollowing = (req, res) => {
    var userId = req.user

    User.findById(userId)
        .then(user => {
            Vendor.find({ _id: user.following})
                .then(user => {
                    if(!user){
                        res.status(200).json({ msg: 'your are following anyone' })
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

module.exports.addHistory = (req, res) => {
    var { history } = req.body
    var userId = req.user

    User.updateOne({ _id: userId }, {
        $addToSet: {
            history
        }
    })
        .then(result => {
            res.status(200)
        })
        .catch(result => {
            res.status(400)
        })
}
module.exports.removeHistory = (req, res) => {
    var { history } = req.body
    var userId = req.user

    User.updateOne({ _id: userId }, {
        $pull: {
            history
        }
    })
        .then(result => {
            res.status(200)
        })
        .catch(result => {
            res.status(400)
        })
}