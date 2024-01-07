"use strict";
let age = 30;
let firstName = 'Mario';
let isFictional;
age = 31;
firstName = 'Luigi';
isFictional = false;
// Typescript infers type automatically, can't assign them different values
let planet = 'Earth';
let moons = 1;
let isLarge = false;
// null & undefined also can't be changed after assigned
let something;
let anotherThing;
console.log(firstName);
// Arrays
let names = ['Mario', 'Luigi', 'Gaba'];
let ages = [30, 31, 29];
let bools = [true, false, true];
// Type inference with arrays
let fruits = ['apples', 'pears', 'bananas', 'mangos'];
fruits.push('grapes');
const f = fruits[3];
let things = [1, true, 'hello'];
const t = things[0]; // not necessary always a number
//----------------
// Object literals
//----------------
// Tuples
let address = ['123 Main St', 98076];
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
// Any
let car = 'BMW';
