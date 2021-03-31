const fs = require("fs");

const node7 = {name: "7", child1: null, child2: null};
const node6 = {name: "6", child1: node7, child2: null};
const node5 = {name: "5", child1: node6, child2: null};
const node4 = {name: "4", child1: null, child2: null};
const node3 = {name: "3", child1: null, child2: null};
const node2 = {name: "2", child1: node4, child2: node5};
const node1 = {name: "1", child1: node2, child2: node3};

fs.writeFileSync("task3_7.txt", JSON.stringify(node1));

let lobgestbranch = "";
function search(node, branch)
{
    branch += node.name;
    if (branch.length > lobgestbranch.length)
        lobgestbranch = branch;
    if (node.child1 !== null)
    {
        //console.log(node.name);
        search(node.child1, branch);
    }
    if (node.child2 !== null)
    {
        //console.log(node.name);
        search(node.child2, branch);
    }
}

const obj = JSON.parse(fs.readFileSync("task3_7.txt", "utf8"));
search(obj, "");
console.log("Longest branch:")
console.log(lobgestbranch);