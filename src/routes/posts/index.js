const posts = require('express').Router()
const isUserAuthenticated = require('../authMiddleware')
const fetchPosts = require('./fetchPosts')
const fetchPostByIndex = require('./fetchPostByIndex')
const fetchPostByName = require('./fetchPostByName')
const updatePost = require('./updatePost')
const deletePost = require('./deletePost')
const newPost = require('./newPost')

posts.get('/', fetchPosts)
posts.get('/index/:index', fetchPostByIndex)
posts.get('/:name', fetchPostByName)
posts.get('/:post/delete', deletePost)
posts.post('/new', isUserAuthenticated, newPost)
posts.post('/:index', isUserAuthenticated, updatePost)

module.exports = posts
