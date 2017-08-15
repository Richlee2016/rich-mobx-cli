#!/usr/bin/env node

var program = require('commander'),
    gs = require('../lib/copy.js');

program
  .version(require('../package.json').version)
  .usage('[options] [project name]')
  .parse(process.argv);

var pname = program.args[0]

gs(pname);