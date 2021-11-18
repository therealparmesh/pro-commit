const childProcess = require('child_process');

let dir;

try {
  dir = childProcess.execSync('git config core.hooksPath').toString().trim();
} catch (e) {
  dir = '.git/hooks';
}

const file = `${dir}/pre-commit`;

module.exports = { dir, file };
