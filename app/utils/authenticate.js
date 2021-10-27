var jwt = require('jsonwebtoken')
require('dotenv').config()

function authenticate (req, res, next){
    var token = req.header('x-auth-token')

    jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        if(decoded){
            req.user = decoded.id
            next()
        }
        else{
            res.status(400).json({errmsg: 'Please Login'})
        }
      });
}

module.exports = authenticate