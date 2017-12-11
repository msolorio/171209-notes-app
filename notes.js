const fs = require('fs');

function fetchNotes() {
  try {
    const allNotesString = fs.readFileSync('./notes.json');
    return JSON.parse(allNotesString);
  } catch(e) {
    console.error('There was an error fetching note data', e);
    return { notes: [] };
  };
}


function saveNotes(noteData, cb) {
  try {
    fs.writeFileSync('./notes.json', JSON.stringify(noteData));
  } catch(e) {
    console.error('unable to update notes data.\n', e);
    return;
  }

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
  const noteData = fetchNotes();

  console.log('all notes:', noteData.notes);
}


function getNote(title) {
  const noteData = fetchNotes();

  const chosenNote = noteData.notes.find(note => note.title === title);

  if (!chosenNote) {
    console.log(`Note with title "${title}" doesn't exist.`);
    return;
  }

  console.log('chosen note:', chosenNote);
}


function removeNote(title) {
  const noteData = fetchNotes();

  const filteredNotesArray = noteData.notes.filter(note => note.title !== title);

  if (noteData.notes.length === filteredNotesArray.length) {
    console.log(`No note found with title "${title}"`);
    return;
  }

  noteData.notes = filteredNotesArray;

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
