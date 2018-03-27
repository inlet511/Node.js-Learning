const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./note.js');

const titleOptions = {
    describe: "Title of note",
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describ: "Body of note",
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    }).command('list', 'List All notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (_.isObject(note)) {
        notes.logNote(note);
    } else {
        console.log('note already exists');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (_.isObject(note)) {
        notes.logNote(note);
    } else {
        console.log("Not Found!");
    }
} else if (command === 'remove') {
    var noteRemoved = notes.RemoveNote(argv.title);
    console.log(noteRemoved ? 'Node Removed' : 'Note not found');
} else {
    console.log('Command not recognized');
}