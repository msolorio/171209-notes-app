const yargs = require('yargs');

const argv = yargs
  .command('add', 'add a new note', {
    title: {
      describe: 'the title of the new note',
      demand: true,
      alias: 't'
    },
    body: {
      describe: 'the body of the new note',
      demand: true,
      alias: 'b'
    }
  })
  // provides help documentation on node app.js --help
  .help()
  .argv;

module.exports = argv;
