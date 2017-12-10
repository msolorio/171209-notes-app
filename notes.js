const fs = require('fs');

function addNote(title, body) {
  console.log(`adding note: ${title}, ${body}`);

  const newNote = { title, body };
  const allNotesString = fs.readFileSync('./notes.json');
  const allNotesParsed = JSON.parse(allNotesString);

  const duplicateNote = allNotesParsed.notes.find(note => note.title === title);

  if (duplicateNote) {
    console.log(`Note with title, "${title}" already exists. Please provide a unique title.`);
    return;
  }

  allNotesParsed.notes.push(newNote);

  fs.writeFileSync('./notes.json', JSON.stringify(allNotesParsed));
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

  fs.writeFileSync('./notes.json', JSON.stringify(allNotesParsed));
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
