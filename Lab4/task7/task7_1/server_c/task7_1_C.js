"use strict";

// импорт библиотек
const express = require("express");
const request = require("request");

// запускаем сервер
const app = express();
const port = 5004;
app.listen(port);
console.log(`Server on port ${port}`);

const way = __dirname + "/static";
app.use(express.static(way));

// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// функция для отправки POST запроса на другой сервер
function sendPost(url, body, callback) {
    // задаём заголовки
    const headers = {};
    headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
    headers["Connection"] = "close";
    // отправляем запрос
    request.post({
        url: url,
        body: body,
        headers: headers,
    }, function (error, response, body) {
        if(error) {
            callback(null);
        } else {
            callback(body);
        }
    });
}

// принимаем GET запрос и отправляем POST запрос на другой сервер
app.get("/addCar", function(request, response) {
    const car = request.query.car;
    const price = request.query.price;
    sendPost("http://localhost:5002/insert/record", JSON.stringify({
        car: car,
        price: price
    }), function(answerString) {
        const answerObject = JSON.parse(answerString);
        const answer = answerObject.answer;
        response.end("Car added: " + answer);
    });
});

// принимаем GET запрос и отправляем POST запрос на другой сервер
app.get("/getCar", function(request, response) {
    const price = request.query.price;
    sendPost("http://localhost:5002/select/record", JSON.stringify({
        price: price
    }), function(answerString) {
        const answerObject = JSON.parse(answerString);
        const answer = answerObject.answer;
        response.end("Car result: " + answer);
    });
});

// принимаем GET запрос и отправляем POST запрос на другой сервер
app.get("/addWarehouse", function(request, response) {
    const warehouse = request.query.warehouse;
    const arrCar = request.query.arrCar;
    sendPost("http://localhost:5000/insert/record", JSON.stringify({
        warehouse: warehouse,
        arrCar: arrCar
    }), function(answerString) {
        const answerObject = JSON.parse(answerString);
        const answer = answerObject.answer;
        response.end("Warehouse added: " + answer);
    });
});

// принимаем GET запрос и отправляем POST запрос на другой сервер
app.get("/getWarehouse", function(request, response) {
    const warehouse = request.query.warehouse;
    sendPost("http://localhost:5000/select/record", JSON.stringify({
        warehouse: warehouse
    }), function(answerString) {
        const answerObject = JSON.parse(answerString);
        const answer = answerObject.answer;
        response.end("Warehouse result: " + answer);
    });
});