const mongoose = require('mongoose')
const Schema =  mongoose.Schema
const reminderSchema = new Schema({
    title : String,
    description : String,
    date : String,
    timer :String
})
const Reminder = mongoose.model('Reminder',reminderSchema)
module.exports = Reminder