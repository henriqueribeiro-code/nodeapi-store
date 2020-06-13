'use strict'


const mongoose = require('mongoose')
const ValidatorContract = require('../validators/fluent-validator')
const Product = mongoose.model('Product')
const repository = require('../repositories/product-repository')


exports.get = (req, res, next) => {
    Product
    repository
        .get()
        .then(data => {
            res.status(200).send(data)
        })
        .catch(erro => {
            res.status(400).send(erro);
        })
}


exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(erro => {
            res.status(400).send(erro);
        })
}


exports.getById = (req, res, next) => {
    repository
        .getById(req.params.id)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(erro => {
            res.status(400).send(erro);
        })
}


exports.getByTag = (req, res, next) => {
    repository
        .getByTag(req.params.tag)
        .then(data => {
            res.status(200).send(data)
        })
        .catch(erro => {
            res.status(400).send(erro);
        })
}


exports.post = (req, res, next) => {

    let contract = new ValidatorContract()

    // validação dos models
    contract.hasMinLen(req.body.title, 3, "O título deve conter no mínimo 3 caracteres válidos")
    contract.hasMinLen(req.body.slug, 3, "O slug deve conter no mínimo 3 caracteres válidos")
    contract.hasMinLen(req.body.description, 10, "A descrição deve conter no mínimo 10 caracteres válidos")

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end()
        return
    }


    repository
        .create(req.body)
        .then(x => {
            res.status(201).send({ message: " Produto cadastrado com sucesso! " })
        })
        .catch(erro => {

            res.status(400).send({
                message: " Error ao cadastrar o produto! ",
                data: erro
            })

        })

}


exports.put = (req, res, next) => {
    repository
        .update(req.params.id, req.body)
        .then(data => {
            res.status(200).send({
                message: "Produto atualizado com sucesso!"
            })
        })
        .catch(erro => {
            res.status(400).send({
                message: "Erro ao atualizar o produto",
                data: erro
            })

        })
}


exports.del = (req, res, next) => { // criação de rota 
    repository
        .delete(req.body.id)
        .then(data => {
            res.status(200).send({
                message: "Produto removido com sucesso!"
            })
        })
        .catch(erro => {
            res.status(400).send({
                message: "Erro ao remover o produto",
                data: erro
            })

        })

}



