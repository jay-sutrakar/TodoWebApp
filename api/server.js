const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT
const User = require('./Models/User')
const Todo = require('./Models/Todo')
const Reminder = require ('./Models/Reminder')

app.use(express.json())
app.use(cors())
//--------------------------------------------------------------------
const mongoose = require('mongoose')
mongoose.connect(process.env.URL,{useNewUrlParser : true,useUnifiedTopology : true},()=>{
    console.log('Connection Established')
})
const db = mongoose.connection
db.on('error',console.error.bind(console,'Database connection Error') )
db.once('open',()=> {
    console.log('Now connected to database')
})
//------------------------------------------------------------------------------------

app.get('/',(req,res) => {
    res.send('Hello')
})
//=======================================================SignIn========================================
app.post('/signin',(req,res)=> {
    const email = req.body.email
    const password = req.body.password
    User.findOne({email:email,password:password},(err,doc)=> {
        if(doc!== null){
            res.send(doc)
        }else{
            res.sendStatus(404)
        }
    })
})
//==============================================================SignUp=======================================
app.post('/signup',(req,res) => {
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    User.findOne({email : email},(err,doc)=> {
        if(doc === null){
            user = new User()
            user.username = username;
            user.email = email
            user.password = password
            user.save()
            .then(res.send(user))
            .catch(err => res.sendStatus(400))
        }else{
            res.send(err)
        }
    })
})
//======================================================================================
app.get('/:id/todos',(req,res)=>{
    console.log(req.params.id)
    User.findById({_id:req.params.id},(err,doc)=>{
        if(!err){
            res.send(doc.todos)
        }
    })
    .catch(err => console.log(err))
    
})
//=====================================================================================
//=============================================================================
app.post('/:id/todo',(req,res) => {
    
    if(req.body.todo.title === undefined )
        res.send("empty body")
    else{
        todo = new Todo()
        todo.title = req.body.todo.title,
        todo.description = req.body.todo.description
        console.log(todo)
        User.findOne({_id:req.params.id},(err,doc)=>{
                doc.todos.push(todo)
                doc.save()
        })
        .then(res.send(todo))
    }
    
})
//======================================================================

app.delete('/:uid/:id/todo',(req,res)=>{
    User.findOne({_id:req.params.uid},(err,doc)=>{
        if(!err){
            var oldtodos = [...doc.todos]
            oldtodos = oldtodos.filter(todo => (todo._id).toString() !== req.params.id)
            doc.todos = oldtodos
            doc.save()
        }
    })
    .then(res.send("OK"))
    .catch(err => console.log(err))
    
})
//==================================================================
app.post('/:uid/:id/completetodo',(req,res)=>{
    User.findOne({_id:req.params.uid},(err,doc)=>{
        if(!err){
            var oldtodos = [...doc.todos]
            oldtodos.forEach((todo,i)=>{
                if((todo._id).toString() === req.params.id){
                    todo.completed = true
                  }
            })
            
            doc.todos = oldtodos
            doc.save()
        }
    })
    .then(res.send("OK"))
    .catch(err => console.log(err))
    
})

//===================================================================
app.post('/signin/:username/:password',(req,res)=>{
    User.findOne({email:req.params.username,password : req.params.password},(err,doc)=>{
            if(!err){
                res.send(doc)
            }
        
    })
    .catch(err => res.send(err))
})
//==================================================================
app.get('/:id/reminders',(req,res)=>{
    User.findById({_id:req.params.id} , (err,doc)=>{
        if(!err){
           
            res.send(doc.reminders)
        }
    })
    .catch(err => console.log(err))
})
//=======================================================
app.post('/:id/newreminder',(req,res) => {
    if(req.body.newreminder === undefined){
        res.send('Field Empty')
    }else{
        reminder = new Reminder()
        reminder.title = req.body.newreminder.title,
        reminder.description = req.body.newreminder.description,
        reminder.date = req.body.newreminder.date,
        reminder.timer = req.body.newreminder.timer
        User.findOne({_id : req.params.id},(err,doc)=>{
            doc.reminders.push(reminder)
            doc.save()
        })
        .then(()=> res.send(reminder))
        .catch(err => res.send(err))
    }
})
//===============================================
app.delete('/:uid/:id/reminder',(req,res)=>{
    User.findOne({_id : req.params.uid},(err,doc)=> {
        if(!err){
            let oldReminders = [...doc.reminders]
            oldReminders = oldReminders.filter(rem => (rem._id).toString() !== req.params.id)
            doc.reminders = oldReminders
            doc.save()
            .then(res.send('Deleted'))
        }
    })
    .catch(err => console.log(err))
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})