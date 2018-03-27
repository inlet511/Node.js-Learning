console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const _=require('lodash');


const notes = require('./note.js');

// var user = os.userInfo();

// fs.appendFile('greetings.txt','Hello '+ user.username + '!',function(err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });

//第二种写法
// fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age} years old.`,function(err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });

// var res = notes.addNote();
// console.log(res);

// var add = notes.add;
// console.log(add(3,6));

// console.log(_.isString(true));
// console.log(_.isString('Ken'));

// var filteredArray=_.uniq(['Ken','Ken','Ken',1,1,1,3,3,5,6]);
// console.log(filteredArray);
