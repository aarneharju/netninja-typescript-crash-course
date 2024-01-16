let age1: number = 30;
let firstName: string = 'Mario';
let isFictional: boolean;

age1 = 31;
firstName = 'Luigi';
isFictional = false;

// Typescript infers type automatically, can't assign them different types afterwards
let planet = 'Earth';
let moons = 1;
let isLarge = false;

// null & undefined also can't be changed after assigned
let something: null;
let anotherThing: undefined;

console.log(firstName);

//-------
// Arrays
//-------

let names: string[] = ['Mario', 'Luigi', 'Gaba'];
let ages: number[] = [30, 31, 29];
let bools: boolean[] = [true, false, true];

// Type inference with arrays

let fruits = ['apples', 'pears', 'bananas', 'mangos'];

fruits.push('grapes');

const f = fruits[3];

let things1 = [1, true, 'hello'];

const t = things1[0]; // not necessary always a number

//----------------
// Object literals
//----------------

let user: { firstName: string; age: number; id: number } = {
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

function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

const subtractTwoNumbers = (a: number, b: number): number => {
  return a - b;
};

// When nothing returned, the function return type is void. Which will be inferred, if not set manually

function addAllNumbers(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
}

// Return type inference

function formatGreeting(name: string, greeting: string) {
  return `${greeting}, ${name}`;
}

//---------
// Any type
//---------

let age: any;

age = 30;
age = false; // Basically turns typescript into normal javascript

//-------------------
// Any type in arrays
//-------------------

let things: any[] = ['hello', true, 123, null];

things.push({ id: 234 });

//-------
// Tuples
//-------

let address: [string, number, boolean] = ['123 Main St', 98076, true];

let hsla: [number, string, string, number] = [200, '100%', '50%', 0.5];

function useCoords(): [number, number] {
  // get coords
  const lat = 100;
  const long = 50;

  return [lat, long];
}

//-------------
// Named tuples
//-------------

let user1: [name: string, age: number];

user1 = ['Bob', 30];

// -----
// Enums
// -----

enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Green;

//-----------
// Interfaces
//-----------

interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = {
  name: 'John Doe',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
};

interface Post {
  title: string;
  body: string;
  tags: string[];
  create_at: Date;
  author: Author;
}

const newPost: Post = {
  title: 'My awesome post',
  body: 'Lorem ipsum dolor sit amet',
  tags: ['typescript', 'webdev'],
  create_at: new Date(),
  author: authorOne,
};

// Interfaces as function argument types

function createPost(post: Post): void {
  console.log(`Created post ${post.title} by ${post.author.name}`);
}

createPost(newPost);

// Interfaces with arrays

let posts: Post[] = [newPost];

//-------------
// Type aliases
//-------------

// example 1 - tuple

type RGB = [number, number, number];

function getRandomColor(): RGB {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b]; // return a tuple
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);

// example 2 - object literal

type User = {
  name: string;
  score: number;
};

const userOne: User = { name: 'mario', score: 75 };

function formatUser(user: User): void {
  console.log(`${user.name}: ${user.score}`);
}

formatUser(userOne);
formatUser({ name: 'luigi', score: 30 });
