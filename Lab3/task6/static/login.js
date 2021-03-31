"use strict";

function ajaxGet(urlString, callback) {
    let r = new XMLHttpRequest();
    r.open("GET", urlString, true);
    r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    r.send(null);
    r.onload = function() {
        callback(r.response);
    }
}

function makeAction() {
    const l = document.getElementById( "login" ).value;
    const p = document.getElementById( "pass" ).value;
    console.log(l, p);
    const url = `request?login=${l}&password=${p}`

    ajaxGet(url, function(answerString) {
        const answerObject = JSON.parse(answerString);
        if (answerObject.answer === "true")
            window.location.replace("http://localhost:5000/getInfo.html")
        else
            alert("Incorrect input")
    });
}