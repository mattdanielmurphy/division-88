const products = require('express').Router()

const fetchAllProducts = require('./fetchAllProducts')

products.get('/', fetchAllProducts)

module.exports = products
