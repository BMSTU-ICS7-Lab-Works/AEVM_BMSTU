"use strict";

const fs = require("fs");
const readlineSync = require('readline-sync');

const n = readlineSync.question("Input N: ");
let arr = [];
let filetext = '';
for(let i = 0; i < n; i++)
{
    let filename = readlineSync.question("Input file name: ");
    let text = fs.readFileSync(filename + '.txt', "utf8");
    filetext = filetext.concat(text);
}

const filename = "task3_5.txt";
fs.writeFileSync(filename, filetext);
