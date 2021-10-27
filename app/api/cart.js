var { Router } = require('express')
var authenticate = require('../utils/authenticate')
var { addToCart, removeFromCart, getCart } = require('../controller/Cart')

var router = Router()

//add to the wishlist
router.put('/', authenticate, addToCart)

//remove from wishlist
router.delete('/:id', authenticate, removeFromCart)

//get wishlist
router.get('/', authenticate, getCart)


module.exports = router