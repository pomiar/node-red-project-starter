#!/usr/bin/env node

const spawn = require('child_process').spawn;
const exec = require('child_process').execSync;

var args = process.argv;
var port = parseInt(args[2]);
var command;

if (args.find(a => a === '-f')) { const npm_install = exec('npm install -f'); }

if (port) { command = spawn('node', ['node_modules/node-red/red.js', '-p', port, '-userDir', '.'], {stdio:'inherit'}); }
else { command = spawn('node', ['node_modules/node-red/red.js', '-userDir', '.'], {stdio:'inherit'}); }
