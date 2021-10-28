var mongoose = require('mongoose')

var productSchema = new mongoose.Schema({
    name: String,
    productId: String,
    category: String,
    vendorId: String,
    image: String,
    price: Number,
    discountedPrice: Number,
    description: String,
    availability: Boolean,
    rating: [{
        rate: Number,
        userId: String
    }],
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('product', productSchema)