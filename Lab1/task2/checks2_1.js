let linemodule = require("./task2_1.js");

let dot = new linemodule.Dot(3, 3);
dot.showDotFields();

let dot2 = new linemodule.Dot(3, 4);
dot2.showDotFields();

let sect = new linemodule.Section(dot, dot2);

sect.showSectFields();

console.log(sect.Length);