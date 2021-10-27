var mongoose = require('mongoose')

var commentSchema = new mongoose.Schema({
    itemId: String,
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
})

module.exports = mongoose.model('comment', commentSchema)