#!/usr/bin/env node

const fs = require('fs');
const { dir, file } = require('./env');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(file, '#!/bin/sh\n\nnpm run pro-commit:task\n');
fs.chmodSync(file, 0o755);
