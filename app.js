const _ = require('lodash');
const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const argv = require('./argv');

const command = argv._[0];

function performUserAction(command) {
  switch(command) {
    case 'add':
      notes.addNote(argv.title, argv.body);
      break;

    case 'list':
      notes.getAll();
      break;

    case 'read':
      notes.getNote(argv.title);
      break;

    case 'remove':
      notes.removeNote(argv.title);
      break;

    default:
      console.log('command not recognized');
  }
}

performUserAction(command);
