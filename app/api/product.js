var { Router } = require('express')
const { createProduct, deleteProduct, editProduct, getProduct, getProducts } = require('../controller/product')
var authenticate = require('../utils/authenticate')

var router = Router()

//upload product
router.post('/', authenticate, createProduct)

//delete product
router.delete('/:id', authenticate, deleteProduct)

//edit product details
router.put('/:id', authenticate, editProduct)

//get a single product
router.get('/:id', getProduct)

//get products
router.get('/', getProducts)

module.exports = router