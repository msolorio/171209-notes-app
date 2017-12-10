const _ = require('lodash');
const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const argv = require('yargs').argv;
const { title: argTitle, body: argBody } = argv;

console.log('yargs:', argv);
console.log('running app js');

const command = argv._[0];

function performUserAction(command) {
  switch(command) {
    case 'add':
      notes.addNote(argTitle, argBody);
      break;

    case 'list':
      notes.getAll();
      break;

    case 'read':
      notes.getNote(argTitle);
      break;

    case 'remove':
      notes.removeNote(argTitle);
      break;

    default:
      console.log('command not recognized');
  }
}

performUserAction(command);
