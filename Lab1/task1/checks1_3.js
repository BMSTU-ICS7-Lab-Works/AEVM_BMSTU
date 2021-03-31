var assert = require('assert');

var list = require("./task1_3.js");

dots = [
    {
        name: '1',
        x: 5,
        y: 7
    },
    {
        name: '2',
        x: 6,
        y: 9
    },
    {
        name: '3',
        x: 2,
        y: 2
    },
    {
        name: '4',
        x: -3,
        y: -4
    },
    {
        name: '5',
        x: -6,
        y: -7
    },
    {
        name: '6',
        x: 7,
        y: 7
    },
    {
        name: '7',
        x: 1,
        y: 0
    }
];

var result = list.CREATE().UPDATE(dots[0]).UPDATE(dots[1]).UPDATE(dots[2]).UPDATE(dots[3])
    .UPDATE(dots[4]).UPDATE(dots[5]).UPDATE(dots[6]).DELETE(6);

result.LargestDistance();
result.dots_inrange(dots[6], 4);
result.fieldDots(dots[6], 'left');
result.Areadots(dots[6], dots[0]);