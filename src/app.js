'use strict'
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const mongoose = require('mongoose')


const router = express.Router()

//conexão de db
mongoose.connect('mongodb+srv://drakMongoDB:1912pyIE@nodestore-qssu5.azure.mongodb.net/nodestore?retryWrites=true&w=majority')

const Products = require('./models/produts-models')
// rotas
const indexRoutes = require('./routes/index')
const products = require('./routes/products')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', indexRoutes)
app.use('/products', products)



module.exports = app