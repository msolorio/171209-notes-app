// this file should be called from playground directory
const fs = require('fs');

// define note as object
const note = {
  title: 'cool note',
  body: 'some details about cool note'
};

// convert note object to string
const noteString = JSON.stringify(note);

// write string to notes.json
fs.writeFileSync('./notes.json', noteString);

// read string from notes.json
const noteRead = fs.readFileSync('./notes.json');

// convert back to note object
const noteReadObj = JSON.parse(noteRead);

// print out note.title
console.log('noteReadObj.title:', noteReadObj.title);
