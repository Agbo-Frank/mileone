const express = require('express')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./app/graphql/schemas/index')
const resolver = require('./app/graphql/resolver')
const mongoose = require('mongoose')
const fs = require('fs')
const {authenticate} = require('./app/utils/authenticate')
const upload = require('./app/upload')
const path = require('path')
const port = process.env.PORT || 5500 
require('dotenv').config()

const app = express()


app.use(cors())
app.use(express.json({ limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))

const db = process.env.MONGODB_URL
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => app.listen(port, () => {
            console.log('listening to port 5500')
        }))
 .catch(err => console.log(err))

app.use('/upload', upload)
app.use('/graphql', authenticate, graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.resolve(__dirname, './client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'bulid', 'index.html'))
    })
 }
