// var obj = {
//     name:'Ken'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Ken","age":25}';
// var jsonObj=JSON.parse(personString);
// console.log(typeof jsonObj);
// console.log(jsonObj.name,jsonObj.age);

const fs = require('fs');

// var originalNode = {
//     title:'Some title',
//     body:'Some body'
// };

// var originalNoteString = JSON.stringify(originalNode);

// fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var obj = JSON.parse(noteString);
console.log(obj.title,obj.body);
