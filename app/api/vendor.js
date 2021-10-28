var { Router } = require('express')
var { createVendor, getVendors, getFollowers, getVendor } = require('../controller/vendor')
var authenticate = require('../utils/authenticate')

var router = Router()

//sign up as a vendor
router.post('/', createVendor)

//get Vendor
router.get('/', authenticate, getVendor)

//get vendors within a region
router.get('/', getVendors)

//get followers
router.get('/follow', authenticate, getFollowers)


module.exports = router