"use strict";

const fs = require("fs");
const readlineSync = require('readline-sync');

function vowel_word(word)
{
    let vowels = ['A', 'E', 'O', 'U', 'Y', 'I', 'a', 'e', 'o', 'u', 'y', 'i'];

    for (let i = 0; i < word.length; i++)
        if (vowels.includes(word[i]) === false)
            return false
    return true
}

const filename = "task3_1.txt";
if (fs.existsSync(filename))
{
    let filecontent = fs.readFileSync(filename, "utf8");

    let arr = JSON.parse(filecontent);

    for(let i = 0; i < arr.length; i++)
        if(vowel_word(arr[i]) === true) console.log(arr[i]);
}
else
{
    console.log("File was not found");
    return -1;
}






