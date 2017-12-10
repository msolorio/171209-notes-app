const _ = require('lodash');
const fs = require('fs');
const os = require('os');
const notes = require('./notes');

console.log('running app js');
const command = process.argv[2];

function performUserAction(command) {
  switch(command) {
    case 'add':
      console.log('adding note');
      break;
    case 'list':
      console.log('displaying list');
      break;
    case 'read':
      console.log('displaying an individual note');
      break;
    case 'remove':
      console.log('removing an individual note');
      break;
    default:
      console.log('command not recognized');
  }
}

performUserAction(command);
