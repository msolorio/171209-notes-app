const fs = require('fs');

function fetchNotes() {
  try {
    const allNotesString = fs.readFileSync('./notes.json');
    return JSON.parse(allNotesString);
  } catch(e) {
    return { notes: [] };
  };
}

function saveNotes(noteData, cb) {
  try {
    fs.writeFileSync('./notes.json', JSON.stringify(noteData));
  } catch(e) {}

  cb && (typeof cb === 'function') && cb();
}

function addNote(title, body) {
  const noteData = fetchNotes();
  const newNote = { title, body };

  const duplicateNote = noteData.notes.find(note => note.title === title);

  if (duplicateNote) {
    console.log(`Note with title, "${title}" already exists. Please provide a unique title.`);
    return;
  }

  noteData.notes.push(newNote);

  saveNotes(noteData, () => {
    console.log(`New note create with title "${title}" and body "${body}"`);
  });
}

function getAll() {
  console.log('Getting all notes');
  const noteData = fetchNotes();

  console.log('allNotes:', noteData.notes);
}

function getNote(title) {
  console.log(`getting note: ${title}`);
  const noteData = fetchNotes();

  const chosenNote = noteData.notes.find(note => note.title === title);

  if (!chosenNote) {
    console.log(`Note with title "${title}" doesn't exist.`);
    return;
  }

  console.log('chosenNote:', chosenNote);
}

function removeNote(title) {
  console.log(`removing note: ${title}`);
  const noteData = fetchNotes();

  noteData.notes = noteData.notes.filter(note => note.title !== title);

  saveNotes(noteData, () => {
    console.log(`Removed note with title "${title}"`);
  });
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
