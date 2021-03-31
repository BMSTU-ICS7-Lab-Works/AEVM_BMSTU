"use strict";

const fs = require("fs");
const readlineSync = require('readline-sync');

const n = readlineSync.question("Input N: ");
let arr = [];

for(let i = 0; i < n; i++)
{
    let str = readlineSync.question("Input str: ");
    if(str.length % 2 === 0) arr.push(str);
}

const filename = "task3_1.txt";
let res = JSON.stringify(arr);

fs.writeFileSync(filename, res);
