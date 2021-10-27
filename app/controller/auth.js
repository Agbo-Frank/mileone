var jwt = require('jsonwebtoken')
var User = require('../model/User')
var bcrypt = require('bcrypt')
var Vendor = require('../model/Vendor')

function createToken(id){
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

module.exports.loginUser = (req, res) => {
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
    else{
        User.findOne({ email })
          .then(user => {
              if(!user){
                    Vendor.findOne({ email })
                        .then(vendor => {
                            if(!vendor){
                                res.status(400).json({errmsg: 'this user does not exist'});
                            }
                            else{
                                bcrypt.compare(password, vendor.password, (err, result) => {
                                    if(result){
                                        var token = createToken(vendor._id)
                                        res.status(200).json({
                                            token,
                                            user: vendor
                                        })
                                    }
                                })
                            }
                        })
                        .catch(err => {
                            res.status(400)
                        })
              }
              else{
                bcrypt.compare(password, user.password, (err, result) => {
                    if(result){
                        var token = createToken(user._id)
                        res.status(200).json({
                            token,
                            user
                        })
                    }
                })
              }
          })
          .catch(err => console.log(err))
    }
}