# pro-commit

> Easily add a Git pre-commit hook to your Node.js project.

[![npm](https://img.shields.io/npm/v/pro-commit.svg)](https://www.npmjs.com/package/pro-commit)
[![npm](https://img.shields.io/npm/dt/pro-commit.svg)](https://www.npmjs.com/package/pro-commit)

## Install

```sh
npm install --save-dev pro-commit
```

## Usage

Add `prepare` and `pro-commit:task` to `scripts` in `package.json`:

```json
{
  "scripts": {
    "prepare": "pro-commit",
    "pro-commit:task": "..."
  }
}
```

Run an install to ensure that the `prepare` lifecycle script sets up a Git pre-commit hook:

```sh
npm install
```
