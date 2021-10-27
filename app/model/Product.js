var mongoose = require('mongoose')
var Comment = require('../model/Comments')

var productSchema = new mongoose.Schema({
    name: String,
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
    comments: [{
        userId: String,
        message: String,
        date: {
            type: Date,
            default: Date.now()
        },
        likes: [String],
        reply:[{
            userId: String,
            message: String,
            date: {
                type: Date,
                default: Date.now()
            },
            likes: [String]
        }]
    }],
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('product', productSchema)