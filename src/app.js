'use strict'
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const router = express.Router()


// rotas
const indexRoutes = require('./routes/index')
const products = require('./routes/products')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



app.use('/', indexRoutes)
app.use('/products', products)



module.exports = app