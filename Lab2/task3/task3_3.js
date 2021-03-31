"use strict";

const fs = require("fs");
const readlineSync = require('readline-sync');

const ext = readlineSync.question("Input file extension: ");
const diraddr = readlineSync.question("Input folder address: ");

const arr = fs.readdirSync(diraddr);
for(let i = 0; i < arr.length; i++)
{
    let file = arr[i].split('.');
    let curext = file[file.length - 1];
    if (curext === ext)
    {
        console.log("Content of file " + arr[i].toString());
        console.log(fs.readFileSync(arr[i], "utf8"));
    }
}

let res = JSON.stringify(arr);
