const posts = require('express').Router()
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
posts.post('/new', newPost)
posts.post('/:index', updatePost)

module.exports = posts
