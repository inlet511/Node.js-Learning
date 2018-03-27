console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./note.js');

const argv = yargs.argv;
var command = argv._[0];


if (command === 'add') {
    var note = notes.addNote(argv.title,argv.body);
    if(_.isObject(note))
    {
        console.log(`note ${note.title}:${note.body} added.`);
    }else
    {
        console.log('note already exists');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    var noteRemoved = notes.RemoveNote(argv.title);
    var message = noteRemoved?'Node Removed':'Note not found';
} else {
    console.log('Command not recognized');
}