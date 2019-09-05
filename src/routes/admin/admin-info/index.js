const isUserAuthenticated = require('../../authMiddleware')
const adminInfo = require('express').Router()
const changesMade = require('./haveChangesBeenMade')
const updateAdminInfo = require('./updateAdminInfo')

adminInfo.get('/changes', changesMade)
adminInfo.post('/', isUserAuthenticated, updateAdminInfo)

module.exports = adminInfo
