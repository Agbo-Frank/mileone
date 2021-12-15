const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./app/graphql/schemas/index')
const resolver = require('./app/graphql/resolver')
const mongoose = require('mongoose')
const auth = require('./app/api/auth')
const user = require('./app/api/user')
const vendor = require('./app/api/vendor')
const product = require('./app/api/product')
const comment = require('./app/api/comment')
const wishlist = require('./app/api/wishlist')
const cart = require('./app/api/cart')
const port = process.env.PORT || 5500 
const passport = require('passport')
require('dotenv').config()
require('./app/utils/passport')

const app = express()

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
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}))

const db = process.env.MONGODB_URL
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('MongoDB connected successfully'))
 .catch(err => console.log(err))


app.listen(port, () => {
    console.log('listening to port 5500')
})