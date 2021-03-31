"use strict";

// импорт библиотеки
const express = require("express");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port}`);

// активируем шаблонизатор
app.set("view engine", "hbs");

// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// выдача страницы с массивом игр
app.get("/page/games", function(request, response) {
    let age = request.query.age;
    const infoObject = {
        descriptionValue: "Список игр",
        gamesArray: [
            {name: "Dota2", desc: "MMO draka", age: 18},
            {name: "CSGO", desc: "Strelyat draka", age: 12},
            {name: "AOW", desc: "Strategia draka", age: 9},
            {name: "WOW", desc: "Draka draka", age: 0}
        ]
    };

    const resObj = {
        descriptionValue: "Список игр",
        gamesArray: []
    };

    for (let i = 0; i < infoObject.gamesArray.length; i++){
        let curgame = infoObject.gamesArray[i];
        if (curgame.age < age)
            resObj.gamesArray.push(curgame);
    }
    response.render("pageGames.hbs", resObj);
});