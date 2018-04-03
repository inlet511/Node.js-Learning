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
    db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert todo',err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    //Insert new doc into Users Collection.(name, age, location)

    // db.collection('Users').insertOne({
    //     name:'Ken An',
    //     age:32,
    //     location:'Wu Han'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Uanble to insert in to Users',err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});