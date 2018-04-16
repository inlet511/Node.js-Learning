var express = require('express');
var bodyParser = require('body-parser');
var _=require('lodash');

var {ObjectId} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo = new Todo({ 
        text:req.body.text  
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectId.isValid(id))
        res.status(404).send('Id not valid');
    Todo.findById(id).then((todo)=>{
        if(!todo){
            res.status(404).send(`Can\'t find a todo with id ${id}`);
        }
        res.send({todo});
    }).catch((e)=>res.status(400).send(e));
});

app.post('/users',(req,res)=>{
    var body=_.pick(req.body,['email','password']);
    var user = new User(body);

    user.save().then((user)=>{
        res.send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    });
});

app.listen(3000,()=>{
    console.log('Started on port 3000');
});

module.exports = {app};