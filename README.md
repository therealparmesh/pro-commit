# pro-commit

> Easily add a Git pre-commit hook to your Node.js project.

[![npm](https://img.shields.io/npm/v/pro-commit.svg)](https://www.npmjs.com/package/pro-commit)
[![npm](https://img.shields.io/npm/dt/pro-commit.svg)](https://www.npmjs.com/package/pro-commit)

## Install

```sh
npm install --save-dev pro-commit
```

## Uninstall

```sh
npm uninstall --save-dev pro-commit
rm .git/hooks/pre-commit # change this for projects with custom Git hooks paths
```

## Usage

Add `postinstall` and `pro-commit:task` to `scripts` in `package.json`:

```json
{
  "scripts": {
    "install": "pro-commit",
    "pro-commit:task": "..."
  }
}
```

Run an install to ensure that the `postinstall` lifecycle script sets up a Git pre-commit hook:

```sh
npm install
```
