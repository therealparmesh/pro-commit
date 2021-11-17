#!/usr/bin/env node

const fs = require('fs');
const dir = '.git/hooks';
const file = `${dir}/pre-commit`;
const body = `
#!/bin/sh

npm run pro-commit:task

`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(file, body);
fs.chmodSync(file, 0o755);
