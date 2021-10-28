var mongoose = require('mongoose')

var vendorSchema = new mongoose.Schema({
    name: String,
    email: String,
    vendorId: String,
    password: String,
    biography: String,
    contacts: [{
        media: String,
        link: String
    }],
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        }
    },
    followers: [String],
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('vendor', vendorSchema)