var express = require('express')
var mongoose = require('mongoose')
var auth = require('./app/api/auth')
var user = require('./app/api/user')
var vendor = require('./app/api/vendor')
var product = require('./app/api/product')
var comment = require('./app/api/comment')
var wishlist = require('./app/api/wishlist')
var cart = require('./app/api/cart')
var port = process.env.PORT || 5500 
var passport = require('passport')
require('dotenv').config()
require('./app/utils/passport')

var app = express()

app.use(express.json())
app.use(express.urlencoded({limit: '40mb', extended: true}))
app.use(passport.initialize())
// app.use(passport.session())

app.use('/api/auth', auth)
app.use('/api/user', user)
app.use('/api/vendor', vendor)
app.use('/api/product', product)
app.use('/api/comment', comment)
app.use('/api/wishlist', wishlist)
app.use('/api/cart', cart)

var db = process.env.MONGODB_URL
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('MongoDB connected successfully'))
 .catch(err => console.log(err))


app.listen(port, () => {
    console.log('listening to port 5500')
})