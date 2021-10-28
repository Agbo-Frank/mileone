var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name: String,
    userId: String,
    googleId: String,
    email: String,
    password: String,
    image: String,
    cart: [{
        _id: false,
        itemId: String,
        quantity: {
           type: Number,
           default: 1
        }
    }],
    wishlist: [String],
    following: [String],
    history: [String],
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('user', userSchema)