#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const noise = require('noise-search');

// The only command line argument is the directory where the data files are
const inputDir = process.argv[2];
console.log(`Loading data from ${inputDir}`);

const index = noise.open('costsavings', true);

fs.readdir(inputDir, (_err, files) => {
  const promises = files.map(file => {
    return new Promise((resolve, reject) => {
      fs.readFile(path.join(inputDir, file), (err, data) => {
        if (err) {
          reject(err);
          throw err;
        }

        console.log(file);
        const json = JSON.parse(data);
        resolve(processFile(json));
      });
    });
  });
  Promise.all(promises).then(() => {
    console.log("Done.");
    index.close();
  });
});

const processFile = (data) => {
  // This is where our actual code goes
};
