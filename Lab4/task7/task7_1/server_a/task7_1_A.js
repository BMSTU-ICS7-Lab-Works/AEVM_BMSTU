"use strict";

// импорт библиотеки
const express = require("express");
const fs = require("fs");

// запускаем сервер
const app = express();
const port = 5002;
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
        const car = obj.car;
        const price = obj.price;
        let contentString = fs.readFileSync("./file.txt", "utf8");
        let ftext = [];
        console.log('C');
        if (contentString != '') {
            ftext = JSON.parse(contentString);
        }
        ftext.push({"car": car, "price": price})
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
        const car = JSON.parse(body);
        const price = car.price;
        let contentString = fs.readFileSync("./file.txt", "utf8");
        let answerString = 'This car does not exist';
        if (contentString != '') {
            let ftext = JSON.parse(contentString);
            for (let i = 0; i < ftext.length; i++) {
                if (ftext[i].price == price) {
                    answerString = `car: ${ftext[i].car} price: ${ftext[i].price}`;
                    break;
                }
            }
        }
        response.end(JSON.stringify({
            answer: answerString
        }));
    });
});