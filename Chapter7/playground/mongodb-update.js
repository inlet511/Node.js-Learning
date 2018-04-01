// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const f = require('util').format;
const user = encodeURIComponent('sa');
const password = encodeURIComponent('123456');
const authMechanism = 'DEFAULT';

// Connection URL
const url = f('mongodb://%s:%s@localhost:27017/?authMechanism=%s',
  user, password, authMechanism);

MongoClient.connect(url, (err,client)=>{
    if(err) return console.log(err);
    console.log('Connected to MongoDB server');
    var db = client.db('TodoApp');
 
    db.collection('Todos').findOneAndUpdate({
        _id:new ObjectID("5ac0e5abc3465f5d4c6c9c6a")
    },{
        $set:{
            completed:true
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });


    //client.close();
});