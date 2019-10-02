const products = require('express').Router()

const fetchAllProducts = require('./fetchAllProducts')
const newProduct = require('./newProduct')

products.get('/', fetchAllProducts)
products.post('/', newProduct)

module.exports = products
