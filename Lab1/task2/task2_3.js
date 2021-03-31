"use strict";

let seconds = 0;
let flag = 0;

function intervaloid(delay, flag)
{
    let interval1 = setInterval(() => {

        if (seconds >= 0)
        {
            seconds++;
            let message;
            if (flag === 1)
                message = "Seconds: " + (seconds + 10);
            else
                message = "Seconds: " + seconds;
            console.log(message);
        }

        if(seconds === 10)
        {
            clearInterval(interval1);
            seconds = 0;
            if (flag === 0)
                intervaloid(1000, 1);
            else
                intervaloid(2000, 0);
        }
    }, delay);
}


let delay = 2000;
intervaloid(delay, flag);
