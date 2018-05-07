const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleobj={
 		describe: "title of note",	
 		demand: true,
 		alias: 't'
 	}

const 
	bodyobj = {
 		describe:"body of note",
 		demand: true,
 		alias: 'b'
 	}

const argv = yargs 
 .command('add', 'add a new note',{title:titleobj,body:bodyobj})
 .command('read','reads a note chosen by user',{title:titleobj})
 
 .command('list','list all notes')
 .command('remove','removes note',{title:titleobj})
 .help()
 .argv;

var command = argv._[0];
 
if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
