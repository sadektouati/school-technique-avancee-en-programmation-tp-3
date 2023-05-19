const db = require('../models')
const Product = db.products
const OP = db.Sequelize.OP

exports.create = (req, res) => {
    Product.create(req.body)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || ' Could not insert data'
        })
    })
}

exports.findAll = (req, res) => {
    Product.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || ` Some error occurred, cannot find data with the id ${id}`
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Product.findByPk(id)
    .then(data =>{
    res.send(data)
    })
    .catch(err => {
    res.status(500).send({
    message:
    err.message || `Some error occurred cannot find data id ${id}`
    })
    })
   }   

exports.delete = (req, res) => {
    const id = req.params.id
    Product.destroy({
        where: {id}
    })
    .then(num => {
        res.send({message: num ? 'Product was deleted' : 'Cannont delete product'} )
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || ` Some error occurred cannot find data id ${id}`
        })
    })
}

exports.update = (req, res) =>{
    const id = req.params.id
    Product.update(req.body, {
        where: {id}
    })
    .then(num => {
        res.send({message: num == 1 ? 'Product updated' : 'Product not found' })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || ` Some error occurred cannot find product with id: ${id}`
        })
    })
}