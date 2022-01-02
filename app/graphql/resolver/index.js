const Product = require('./Product')
const User = require('./User')
const Vendor = require('./Vendor')
const Comment  = require('./Comment')
const Wishlist  = require('./Wishlist')
const Cart  = require('./Cart')
const Others  = require('./Others')

module.exports = {
    ...Product,
    ...User,
    ...Vendor,
    ...Comment,
    ...Wishlist,
    ...Cart,
    ...Others 
}