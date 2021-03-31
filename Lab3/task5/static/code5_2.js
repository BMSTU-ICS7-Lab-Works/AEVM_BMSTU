"use strict";

function makeAction(){
    // input fields
    const mail = document.getElementById("field-first").value;
    const label = document.getElementById("result-label");

    // ajax get
    function ajaxGet(urlString, callback) {
        let r = new XMLHttpRequest();
        r.open("GET", urlString, true);
        r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        r.send(null);
        r.onload = function() {
            callback(r.response);
        };
    };

    const url = `/mail?mail=${mail}`;
    ajaxGet(url, function(stringAnswer) {
        const objectAnswer = JSON.parse(stringAnswer);
        const result = objectAnswer.result;
        if (result === null)
            label.innerHTML = `Пользователя с указанной почтой не существует`;
        else
            label.innerHTML = `Пользователь с данной почтой: ${result}`;
    });
};