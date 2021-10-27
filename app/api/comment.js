var { Router } = require('express')
var { makeComment, likeComment } = require('../controller/comment')
var authenticate = require('../utils/authenticate')

var router = Router()

//make a comment
router.post('/:id', authenticate, makeComment)

//like and Unlike comment
router.put('/:id', authenticate, likeComment)

module.exports = router