var jwt = require('jsonwebtoken')
require('dotenv').config()

function auth (req, res, next){
    var token = req.header('x-auth-token')
    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if(decoded){
            req.user = decoded.id
            next()
        }
        else{
            res.status(400).json({err})
        }
      });
}

async function authenticate (req, res, next){
    try{
        const token = req.headers.authtoken
        console.log(token)
        if(!token){
            req.isAuth = false
            return next()
        }
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET)
        if(!decodedToken){
            req.isAuth = false
            return next()
        }
        else{
            req.isAuth = true
            req.user = decodedToken.id
            return next()
        }
    }
    catch(err){
        res.status(400).json({err})
    }
        
}

module.exports = {authenticate, auth}