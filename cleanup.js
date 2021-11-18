const fs = require('fs');
const { file } = require('./env');

if (fs.existsSync(file)) {
  fs.rmSync(file);
}
