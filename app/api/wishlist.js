var { Router } = require('express')
var authenticate = require('../utils/authenticate')
var { addToWishlist, removeFromWishlist, getWishlist } = require('../controller/wishlist')

var router = Router()

//add to the wishlist
router.put('/', authenticate, addToWishlist)

//remove from wishlist
router.delete('/:id', authenticate, removeFromWishlist)

//get wishlist
router.get('/', authenticate, getWishlist)


module.exports = router