var assert = require('assert');

var list = require("./task1_1.js");

childs = [
    {
        surname: 'Сэм',
        age: 2
    },
    {
        surname: 'Эмили',
        age: 5
    },
    {
        surname: 'Мэт',
        age: 7
    },
    {
        surname: 'Брэд',
        age: 12
    },
    {
        surname: 'Шерри',
        age: 3
    },
    {
        surname: 'Керри',
        age: 4
    },
    {
        surname: 'Стелла',
        age: 16
    }
];

var result = list.CREATE().UPDATE(childs[0]).UPDATE(childs[1]).UPDATE(childs[2])
    .UPDATE(childs[3]).UPDATE(childs[4]).UPDATE(childs[5]).UPDATE(childs[6])


result = list.DELETE(6).DELETE(2);


result.averageAge();
result.Olderchild_info();
result.childinfo_between(3, 5);
result.childinfo_surnameAt('С');
result.childinfo_surnameLongerThan(3);
result.childinfo_surnameStartsAtVowel('Э');