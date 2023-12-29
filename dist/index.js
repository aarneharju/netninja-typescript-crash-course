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
