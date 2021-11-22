#!/usr/bin/env node

const childProcess = require('child_process');
const fs = require('fs');

let dir;

try {
  dir = childProcess.execSync('git config core.hooksPath').toString().trim();
} catch (e) {
  dir = '.git/hooks';
}

const file = `${dir}/pre-commit`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(file, '#!/bin/sh\n\nnpm run pro-commit:task\n');
fs.chmodSync(file, 0o755);
