"use strict";
let age1 = 30;
let firstName = 'Mario';
let isFictional;
age1 = 31;
firstName = 'Luigi';
isFictional = false;
// Typescript infers type automatically, can't assign them different types afterwards
let planet = 'Earth';
let moons = 1;
let isLarge = false;
// null & undefined also can't be changed after assigned
let something;
let anotherThing;
console.log(firstName);
//-------
// Arrays
//-------
let names = ['Mario', 'Luigi', 'Gaba'];
let ages = [30, 31, 29];
let bools = [true, false, true];
// Type inference with arrays
let fruits = ['apples', 'pears', 'bananas', 'mangos'];
fruits.push('grapes');
const f = fruits[3];
let things1 = [1, true, 'hello'];
const t = things1[0]; // not necessary always a number
//----------------
// Object literals
//----------------
let user = {
    firstName: 'Mario',
    age: 30,
    id: 123,
};
// Type inference with object literals
let person = {
    name: 'luigi',
    score: 235,
};
//---------
// Functions
//---------
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
// When nothing returned, the function return type is void. Which will be inferred, if not set manually
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
// Return type inference
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
//---------
// Any type
//---------
let age;
age = 30;
age = false; // Basically turns typescript into normal javascript
//-------------------
// Any type in arrays
//-------------------
let things = ['hello', true, 123, null];
things.push({ id: 234 });
//-------
// Tuples
//-------
let address = ['123 Main St', 98076, true];
let hsla = [200, '100%', '50%', 0.5];
function useCoords() {
    // get coords
    const lat = 100;
    const long = 50;
    return [lat, long];
}
//-------------
// Named tuples
//-------------
let user1;
user1 = ['Bob', 30];
// -----
// Enums
// -----
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
const authorOne = {
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
};
const newPost = {
    title: 'My awesome post',
    body: 'Lorem ipsum dolor sit amet',
    tags: ['typescript', 'webdev'],
    create_at: new Date(),
    author: authorOne,
};
// Interfaces as function argument types
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// Interfaces with arrays
let posts = [newPost];
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b]; // return a tuple
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: 'mario', score: 75 };
function formatUser(user) {
    console.log(`${user.name}: ${user.score}`);
}
formatUser(userOne);
formatUser({ name: 'luigi', score: 30 });
