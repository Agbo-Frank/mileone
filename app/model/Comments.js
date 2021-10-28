var mongoose = require('mongoose')

var commentSchema = new mongoose.Schema({
    itemId: String,
    userInfo: {
        _id: String,
        image: String,
        name: String
    },
    message: String,
    date: {
        type: Date,
        default: Date.now()
    },
    likes: [String],
    reply:[{
        id: String,
        image: String,
        name: String,
        message: String,
        likes: [String],
        date: {
            type: Date,
            default: Date.now()
        }
    }]
})

module.exports = mongoose.model('comment', commentSchema)