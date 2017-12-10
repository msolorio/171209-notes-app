const { appendFile } = require('fs');
const username = require('os').userInfo().username;

appendFile(`newFile.txt`, `hello ${username}.`, (err) => {
  if (err) throw err;

  console.log('new file created');
});
