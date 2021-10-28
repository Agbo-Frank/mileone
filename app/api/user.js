var { Router } = require('express')
var {
    createUser, 
    follow, 
    getFollowing, 
    getUser, 
    editUser, 
    addHistory, 
    removeHistory } = require('../controller/user')
var authenticate = require('../utils/authenticate')

var router = Router()

//create User
router.post('/', createUser)

//get User
router.get('/', authenticate, getUser)

//edit User
router.post('/edit', authenticate, editUser)

//follow and unfollow
router.put('/follow', authenticate, follow)

//get followings
router.get('/follow', authenticate, getFollowing)

//add to history
router.get('/follow', authenticate, addHistory)

//remove from history
router.get('/follow', authenticate, removeHistory)

module.exports = router