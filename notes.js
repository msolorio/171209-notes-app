function addNote(title, body) {
  console.log(`adding note: ${title}, ${body}`);
}

function getAll() {
  console.log('Getting all notes');
}

function getNote(title) {
  console.log(`getting note: ${title}`);
}

function removeNote(title) {
  console.log(`removing note: ${title}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
