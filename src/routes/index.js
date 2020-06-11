'use strict'

const express = require('express')
const router = express.Router()


const route = router.get('/', (req, res, next) => { // criação de rota 
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2", 
        author : "henriqueribeirocode"
    })
})


module.exports = router;