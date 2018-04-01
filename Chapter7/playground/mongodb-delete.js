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
  
    //delete Many
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //delete One
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name:'Ken An'}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id:new ObjectID('5ac0e1cb39c69c84846fc45d')}).then((result)=>{
        console.log(result);
    });


    //client.close();
});