"use strict";

function rec_dirs(diraddr)
{
    let dir = fs.readdirSync(diraddr);
    console.log('Current directory ' + diraddr)
    for (let i = 0; i < dir.length; i++)
    {
        if (dir[i].split('.').length === 1)
        {
            let curdir = diraddr + '/' + dir[i];
            rec_dirs(curdir);
        }
        else
        {
            let filetext = fs.readFileSync(diraddr + '/' + dir[i], "utf8");
            if (filetext.length <= 10)
                console.log(filetext);
        }
    }
}

const fs = require("fs");
const readlineSync = require('readline-sync');

const diraddr = './tests';
rec_dirs(diraddr);
