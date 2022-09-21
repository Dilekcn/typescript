"use strict";
// let id = 5; /* This is Javascript decleration */ 
/*Basic Types */
let id = 5;
// console.log("ID : " + id)
let campany = 'New coding';
let isPublished = true;
let x = ' Hello ';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Brad', true]; // same order
//Tuble Array
let employee;
employee = [
    [1, 'Lee'],
    [2, 'Liz'],
    [3, 'Kim']
];
// console.log(employee)
//Union
let pid;
pid: '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Down);
console.log(Direction1.Left);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Up);
console.log(Direction2.Down);
console.log(Direction2.Left);
