#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

// The only command line argument is the directory where the data files are
const inputDir = process.argv[2];
console.log(`Loading data from ${inputDir}`);

fs.readdir(inputDir, (_err, files) => {
  files.forEach(file => {
    fs.readFile(path.join(inputDir, file), (_err, data) => {
      console.log(file);
      const json = JSON.parse(data);
      processFile(json);
    });
  });
});

const processFile = (data) => {
  // This is where our actual code goes
};
