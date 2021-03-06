#!/usr/bin/env node

const { isnt }        = require('../lib/smart');
const Argv            = require('../lib/argv');
const ARGV            = Argv();
const { Config }      = require('..');

// The caller can pass in a different argv array, after ---
var   configOpts  = ARGV.extracts('___');
const CONFIG      = Config(configOpts);

// Get the result
var   result = CONFIG(ARGV._[0] || '');

// Default is first item after '--';
if (isnt(result)) {
  if (Array.isArray(ARGV.__)) {
    result = ARGV.__[0];
  }
}

// Exit and output
var exitCode = 9;
if (!isnt(result)) {
  exitCode = 0;
  console.log(result);
}

process.exit(exitCode);


