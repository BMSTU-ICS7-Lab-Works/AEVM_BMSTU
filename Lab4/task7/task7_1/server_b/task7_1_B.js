"use strict";

// импорт библиотеки
const express = require("express");
const fs = require("fs");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log("Server on port " + port);

// заголовки для ответа
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// загрузка тела
function loadBody(request, callback) {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        callback(body);
    });
}

// приём запроса
app.post("/insert/record", function(request, response) {
    loadBody(request, function(body) {
        const obj = JSON.parse(body);
        const warehouse = obj.warehouse;
        let arrCar = obj.arrCar;
        let contentString = fs.readFileSync("./file.txt", "utf8");
        let ftext = [];
        if (contentString != '') {
            ftext = JSON.parse(contentString);
        }
        arrCar = arrCar.split(",");
        ftext.push({"warehouse": warehouse, "arrCar": arrCar})
        contentString = JSON.stringify(ftext);
        fs.writeFileSync("./file.txt", contentString);
        response.end(JSON.stringify({
            answer: "Success"
        }));
    });
});

// приём запроса
app.post("/select/record", function(request, response) {
    loadBody(request, function(body) {
        const obj = JSON.parse(body);
        const warehouse = obj.warehouse;
        let contentString = fs.readFileSync("./file.txt", "utf8");
        let answerString = 'This warehouse does not exist';
        if (contentString !== '') {
            let ftext = JSON.parse(contentString);
            for (let i = 0; i < ftext.length; i++) {
                if (ftext[i].warehouse == warehouse) {
                    answerString = `cars:`;
                    for (let j = 0; j < ftext[i].arrCar.length; j++) {
                        if (j != ftext[i].arrCar.length - 1) {
                            answerString += `${ftext[i].arrCar[j]},`;
                        } else {
                            answerString += `${ftext[i].arrCar[j]}`;
                        }
                    }
                    break;
                }
            }
        }
        response.end(JSON.stringify({
            answer: answerString
        }));
    });
});