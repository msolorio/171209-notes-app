const fs = require('fs');

function addNote(title, body) {
  console.log(`adding note: ${title}, ${body}`);

  const newNote = { title, body };
  const allNotesString = fs.readFileSync('./notes.json');
  const allNotesParsed = JSON.parse(allNotesString);
  allNotesParsed.notes.push(newNote);
  const newNotesString = JSON.stringify(allNotesParsed);

  fs.writeFileSync('./notes.json', newNotesString);
}

function getAll() {
  console.log('Getting all notes');

  const allNotesString = fs.readFileSync('./notes.json');
  const allNotes = JSON.parse(allNotesString).notes;

  console.log('allNotes:', allNotes);
}

function getNote(title) {
  console.log(`getting note: ${title}`);

  const allNotesString = fs.readFileSync('./notes.json');
  const allNotesParsed = JSON.parse(allNotesString);
  const chosenNote = allNotesParsed.notes.find(note => note.title === title);

  console.log('chosenNote:', chosenNote);
}

function removeNote(title) {
  console.log(`removing note: ${title}`);

  const allNotesString = fs.readFileSync('./notes.json');
  const allNotesParsed = JSON.parse(allNotesString);
  allNotesParsed.notes = allNotesParsed.notes.filter(note => note.title !== title);
  const newNotesString = JSON.stringify(allNotesParsed);
  fs.writeFileSync('./notes.json', newNotesString);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
