let age: number = 30;
let firstName: string = 'Mario';
let isFictional: boolean;

age = 31;
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

let things = [1, true, 'hello'];

const t = things[0]; // not necessary always a number

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

// Tuples

let address: [string, number] = ['123 Main St', 98076];

// Enums

enum Color {
  Red,
  Green,
  Blue,
}

let myColor: Color = Color.Green;

// Any

let car: any = 'BMW';

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
