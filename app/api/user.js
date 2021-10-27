var { Router } = require('express')
var { createUser, follow, getFollowing } = require('../controller/user')
var authenticate = require('../utils/authenticate')

var router = Router()

//create User
router.post('/', createUser)

//follow and unfollow
router.put('/follow', authenticate, follow)

//get followings
router.get('/follow', authenticate, getFollowing)

module.exports = router