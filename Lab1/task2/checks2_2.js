let linemodule = require("./task2_1.js");
let triangmodule = require("./task2_2.js");

let dot = new linemodule.Dot(3, 3);
dot.showDotFields();

let dot2 = new linemodule.Dot(3, 4);
dot2.showDotFields();

let dot3 = new linemodule.Dot(5, 3);
dot3.showDotFields();

let line1 = new linemodule.Section(dot, dot2);
let line2 = new linemodule.Section(dot2, dot3);
let line3 = new linemodule.Section(dot, dot3);

let triang = new triangmodule.Triangle(line1, line2, line3);

triang.isValid();
triang.isRight();
console.log(triang.getPerimeter);
console.log(triang.getSquare);