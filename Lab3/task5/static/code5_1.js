"use strict";

function ajaxPost(urlString, bodyString, callback) {
    let r = new XMLHttpRequest();
    r.open("POST", urlString, true);
    r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    r.send(bodyString);
    r.onload = function() {
        callback(r.response);
    }
}

function makeAction() {
    const mail = document.getElementById("field-first").value;
    const surname = document.getElementById("field-second").value;
    const phone = document.getElementById("field-third").value;

    const label = document.getElementById("result-label");

    ajaxPost("/save/info", JSON.stringify({
        mail, surname, phone
    }), function(answerString) {
        const answerObject = JSON.parse(answerString);
        const result = answerObject.result;
        const person = answerObject.obj;
        if (person === null)
            label.innerHTML = `Такой пользователь уже существует`;
        else
            label.innerHTML = `Был добавлен пользователь: ${person}`;
        alert(result);
    });
}