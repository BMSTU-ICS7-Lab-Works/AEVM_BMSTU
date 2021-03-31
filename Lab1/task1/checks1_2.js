var assert = require('assert');

var list = require("./task1_2.js");

students = [
    {
        group: 'ICS12',
        studcard: '18u672',
        marks: [2, 3, 3, 3]
    },
    {
        group: 'ICS14',
        studcard: '19b344',
        marks: []
    },
    {
        group: 'ICS52',
        studcard: '20s222',
        marks: [4, 4, 4, 5, 5, 3]
    },
    {
        group: 'ICS21',
        studcard: '18u333',
        marks: [2, 3, 4, 5]
    },
    {
        group: 'ICS52',
        studcard: '18u477',
        marks: [3, 3, 3, 3, 4]
    },
    {
        group: 'ICS36',
        studcard: '7u332',
        marks: [5, 5, 5, 5, 4, 4, 4]
    },
    {
        group: 'ICS22',
        studcard: '19u238',
        marks: [2, 2, 2, 5, 5, 5]
    }
];

var result = list.CREATE().UPDATE(students[0]).UPDATE(students[1]).UPDATE(students[2]).UPDATE(students[3])
    .UPDATE(students[4]).UPDATE(students[5]).UPDATE(students[6]).DELETE(6);

result.averageMarks();
result.groupInfo('ICS52');
result.mostMarksAtGroup('ICS52');
result.noMarks_student('');