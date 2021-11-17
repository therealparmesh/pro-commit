const fs = require('fs');
const { file } = require('./constants');

if (fs.existsSync(file)) {
  fs.rmSync(file);
}
