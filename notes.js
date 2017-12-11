const fs = require('fs');

function addNote(title, body) {
  console.log(`adding note: ${title}, ${body}`);

  let noteData = { notes: [] };
  const newNote = { title, body };

  try {
    const allNotesString = fs.readFileSync('./notes.json');
    noteData = JSON.parse(allNotesString);
  } catch(e) {};

  const duplicateNote = noteData.notes.find(note => note.title === title);

  if (duplicateNote) {
    console.log(`Note with title, "${title}" already exists. Please provide a unique title.`);
    return;
  }

  noteData.notes.push(newNote);

  fs.writeFileSync('./notes.json', JSON.stringify(noteData));
}

function getAll() {
  console.log('Getting all notes');

  let noteData = { notes: [] };

  try {
    const allNotesString = fs.readFileSync('./notes.json');
    noteData.notes = JSON.parse(allNotesString).notes;
  } catch(e) {};

  console.log('allNotes:', noteData.notes);
}

function getNote(title) {
  console.log(`getting note: ${title}`);

  let noteData = { notes: [] };

  try {
    const allNotesString = fs.readFileSync('./notes.json');
    const noteData = JSON.parse(allNotesString);
  } catch(e) {};

  const chosenNote = noteData.notes.find(note => note.title === title);

  if (!chosenNote) {
    console.log(`Note with title "${title}" doesn't exist.`);
    return;
  }

  console.log('chosenNote:', chosenNote);
}

function removeNote(title) {
  console.log(`removing note: ${title}`);

  let noteData = { notes: [] };

  try {
    const allNotesString = fs.readFileSync('./notes.json');
    noteData = JSON.parse(allNotesString);
  } catch(e) {};

  noteData.notes = noteData.notes.filter(note => note.title !== title);

  fs.writeFileSync('./notes.json', JSON.stringify(noteData));
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
