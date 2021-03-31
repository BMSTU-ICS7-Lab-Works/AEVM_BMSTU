"use strict";

// импортируем необходимые библиотеки
const express = require("express");
const fs = require("fs");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port}`);

// отправка статических файлов
const way = __dirname + "/static";
app.use(express.static(way));

// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// body
function loadBody(request, callback) {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        callback(body);
    });
}


let masobj = [];


// it is post
app.post("/save/info", function(request, response) {
    loadBody(request, function(body) {
        const obj = JSON.parse(body);
        const mail = obj["mail"];
        const surname = obj["surname"];
        const phone = obj["phone"];

        for (let i = 0; i < masobj.length; i++) {
            if (masobj[i]["mail"] === mail || masobj[i]["phone"] === phone) {
                response.end(JSON.stringify({
                    result: "Save content ne ok",
                    obj: null
                }));
                return;
            }
        }
        masobj.push(obj);
        const contentString = `Mail: ${mail} Surname: ${surname} Phone: ${phone}\n`;
        fs.appendFileSync("file.txt", contentString);
        response.end(JSON.stringify({
            result: "Save content ok",
            obj: contentString
        }));

    });
});

app.get("/mail", function(request, response) {
    const mail = request.query.mail;
    const person = null;
    for (let i = 0; i < masobj.length; i++) {
        if (masobj[i]["mail"] === mail) {
            const contentString = `Mail: ${masobj[i]["mail"]} Surname: ${masobj[i]["surname"]} Phone: ${masobj[i]["phone"]}\n`;
            response.end(JSON.stringify({
                result: contentString
            }));
            return;
        }
    }

    response.end(JSON.stringify({
        result: null
    }));
});