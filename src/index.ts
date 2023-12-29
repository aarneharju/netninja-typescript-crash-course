let age: number = 30;
let firstName: string = 'Mario';
let isFictional: boolean;

age = 31;
firstName = 'Luigi';
isFictional = false;

// Typescript infers type automatically, can't assign them different values
let planet = 'Earth';
let moons = 1;
let isLarge = false;

// null & undefined also can't be changed after assigned
let something: null;
let anotherThing: undefined;

console.log(firstName);
