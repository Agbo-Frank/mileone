const { Router } = require('express')
const {createVendor, createProduct} = require('./controller')
const {auth} = require('../utils/authenticate')
const router = Router()

router.post('/vendor', createVendor)
router.post('/product', auth, createProduct)

module.exports = router