const yargs = require('yargs');

const titleOptions = {
  describe: 'the title of the new note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'the body of the new note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'list all notes', {})
  .command('read', 'read a note', {
    title: titleOptions
  })
  .command('remove', 'remove a note', {
    title: titleOptions
  })
  // provides help documentation on `node app.js --help`
  .help()
  .argv;

module.exports = argv;
