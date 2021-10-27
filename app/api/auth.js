var { Router } = require('express')
const passport = require('passport')
const { loginUser } = require('../controller/auth')

var router = Router()

router.post('/login', loginUser)

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    console.log('i love you ' + req.user)
    res.send('you are here now')
})

module.exports = router