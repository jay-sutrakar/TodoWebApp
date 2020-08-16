const mongoose = require('mongoose')
const Schema =  mongoose.Schema
const userSchema = new Schema({
    username : String,
    email : String,
    password : String,
    todos : {type:Array ,default:null},
    reminders:{type:Array,default:null}
})
const User = mongoose.model('User',userSchema)
module.exports = User