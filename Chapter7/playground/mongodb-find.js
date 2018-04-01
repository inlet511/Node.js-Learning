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
    if(err){
        return console.log(err);        
    }
    console.log('Connected to MongoDB server');
    var db = client.db('TodoApp');
  
    // db.collection('Todos').find({
    //     _id:new ObjectID('5ac0c88d7b100251f8eefe8b')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    // db.collection('Todos').find().count().then((count)=>{       
    //     console.log(`Todos count${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    db.collection('Users').find({
        name:'Ken An'
    }).toArray().then(
        (result)=>{
            console.log(JSON.stringify(result,undefined,2));
        }
    ,(err)=>{
        console.log('Unable to query Users');
    });

    //client.close();
});