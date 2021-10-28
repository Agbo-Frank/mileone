var { Router } = require('express')
var { makeComment, likeComment, replyComment, delComment, delReply } = require('../controller/comment')
var authenticate = require('../utils/authenticate')

var router = Router()

//make a comment
router.post('/', authenticate, makeComment)

//delete a comment
router.delete('/', authenticate, delComment)

//like and Unlike comment
router.put('/:id', authenticate, likeComment)

//reply a comment
router.post('/reply/:id', authenticate, replyComment)

//delete a comment
router.delete('/reply/:id', authenticate, delReply)

module.exports = router