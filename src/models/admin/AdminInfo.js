const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminInfoSchema = new Schema({
  changesMade: { type: Boolean },
})

const AdminInfo = mongoose.model('adminInfo', AdminInfoSchema)

module.exports = AdminInfo
