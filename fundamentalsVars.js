/***
 * VARIABLES
 ***/
addChapter("fundamentalsVars", "VARIABLES");

/*
  cannot start with a number
  must use letter, numbers, _, $
  camelCase = convention
  + PascalCase = for constructor function, class…
*/

/*** VAR ***/
/** Initialization */

// usually used with condition after (if...)
var greeting; // ==> 'undefined' value
/** + reassignement **/
greeting = "Hello";
console.log(greeting);

/** Declaration **/
var name = "John";
/** Reassignement **/
name = "Steve";
console.log(name);

/*** LET & CONST ***/
/* 
  “let” works as var
  “const” cannot be reassigned nor initialize → must assign a value
  ⇒ use “const” by default for code more robust and secure
*/
/** Initialization works with let */

let val;

/** Declaration mandatory for const **/
const person = {
  name: "John",
  age: 30
};
/** Object mutation ok with const **/
/*
  an object can be mutated (>< reassign)
  --> change data in the object, not the object
*/
person.name = "Sara";
person.age = 32;
console.log(person);

const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

console.clear();

/** Warning: Multiple declaration possible with var **/
var greeting; // --> already declared by NO ERROR
// let val; // ==> Error "'val' has already been declared"

/***
 * VAR HOISTING
 ***/
addChapter("fundamentalsVars", "VAR HOISTING");

// ONLY with 'var', NOT 'let' nor 'const'
// ONLY the declaration part of the var is hoisted --> 'var x'
// ==> not the value ==> 'undefined'
val = x;
var x = 5; // ==> 'undefined' (>< from 'x is not defined')

/***
 * DATA TYPES
 ***/
addChapter("fundamentalsVars", "DATA TYPES");
// Provided by 'typeof(variable)'

/*** PRIMITIVE data types ***/
/*
  Important: Copied by VALUES ==> 'separated'
  Stored directly in the location the variable accesses
  Stored on the stack
*/
/** type string **/
val = "Hello";
/** type onumber --> Number.isInteger(value) **/
val = 123; // ==> integer of type number
bool = Number.isInteger(val); // true
val = 123.45; // ==> return float of type number
bool = !Number.isInteger(val); // true
/** NaN --> type number --> Number.isNaN(value) **/
val = NaN; // --> typeof NaN is number
bool = Number.isNaN(val); // true
/** type boolean **/
val = true;
/** type null **/
val = null; // --> typeof null is object --> JS bug
/** type undefined **/
val = undefined;
/** type symbol (ES6) **/
val = Symbol();

/*** REFERENCE data types = OBJECTS ***/
/*
  Important: Copied by REFERENCE ==> 'linked !'
  Accessed by referece
  Objects that are stored on the heap
  A pointer to a location in memory
*/
/** Arrays --> type object --> Array.isArray(value) **/
val = [1, 2, 3];
bool = Array.isArray(val); // true
/** Object literals --> type object **/
val = { a: 1, b: 2 };
/** type function **/
func = a => {
  return ++a;
};
console.log(func(0));
/*
  Note: Artihemetic operators - Increment:
  a++ --> increments and returns the value BEFORE incrementing
  ++a --> increments and returns the value AFTER incrementing
*/

console.log(bool);
console.clear();

/*** DYNAMICALLY TYPES LANGUAGE ***/
/*
  Types associated with values not variables
  The same variable can hold multiple types
  No need to specify types
  >< Most other languages are Statically Typed (Java, C#, C++)
  There are supersets of JS and addons to allow static typing(TypeScript, Flow)
*/

/***
 * MEMORY MANAGEMENT
 ***/
addChapter("fundamentalsVars", "MEMORY MANAGEMENT");

/** Primitive types -> by VALUES **/
var x = 1; // 1st memory space x with 1
var y = x; // 2nd mem. sp. y with 1
y = 2; // 2nd mem. sp. y changed into 2
console.log("x: ", x); // 1
console.log("y: ", y); // 2
console.clear();

/** Object types -> by REFERENCE **/
// SCENARIO 1
var p = { name: "John" };
/* 
  1st mem. sp. p with '?'
  + 2nd mem. sp. with the object { name: 'John'} 
  + '?' = store pointeur / address to object of 2nd mem. sp. in 1st mem. sp.
*/
var q = p;
/* 
  3rd mem. sp. q storing same pointeur to object of 2nd mem. sp.
*/
console.log("p: ", p); // object with John
console.log("q: ", q); // object with John

// SCENARIO 2
q.name = "Smith";
/* 
  2nd mem. sp. with the object is modified 
  p and q still both point to this object !
  why ? changing 1 property of an existing object (>< created p new object)
*/
console.log("p bis: ", p); // object with Smith !!
console.log("q bis: ", q); // object with Smith

// SCENARIO 3
q = { name: "Doe" };
/* 
  new assignement of an object ==> new object created
  ==> 4th mem. sp. with new object
  + q mem. sp. with pointeur to this new object
*/
console.log("p tris: ", p); // object with John (or Smith is SC.2 not commented)
console.log("q tris: ", q); // object with Doe

/***
 * TYPE CONVERSION
 ***/
addChapter("fundamentalsVars", "TYPE CONVERSION");

/** String(value) function **/

// Number to string
val = String(5 + 5);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1, 2, 3]); // ==> '1,2,3' without []

/** value.toString() method **/
val = (5).toString();

/** Number(string) function **/
// String to number
val = Number("5");
val = Number(true); // ==> 1 >< false / null ==> 0
val = Number([1, 2]); // ==> NaN (= Not a Number) of type number <=> alphanum. string / object

/** parseInt(string) function **/
val = parseInt("5.5"); // ==> return integer of type number
/** parseFloat(string) function **/
val = parseFloat("5.5"); // ==> return float of type number

/*** TYPE COERSION ***/

/* Data type conversion hanlded by JS */
val = String(1) + 2; // ==> concatenation --> return string '12'

console.log(typeof val);
console.clear();

/**
 * NUMBERS & THE MATH OBJECT
 ***/
addChapter("fundamentalsVars", "NUMBERS & THE MATH OBJECT");

const num1 = 5;
const num2 = 2;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;
val = num1 ** num2;

// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.4); // --> round up or down
val = Math.ceil(2.4); // --> round up
val = Math.floor(2.4); // --> round down
val = Math.sqrt(25);
val = Math.abs(-3);
val = Math.pow(5, 2);
val = Math.min(2, 33, 4, 55, -2);
val = Math.max(2, 33, 4, 55, -2);
val = Math.random();

val = Math.floor(Math.random() * 10 + 1); // ==> random 1 - 10

/***
 * STRING METHODS & CONCATENATION
 ***/
addChapter("fundamentalsVars", "STRING METHODS & CONCATENATION");

const firstName = "John";
const lastName = "Smith";
const age = 35;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John ";
val += "Smith";
val = "Hello, " + firstName + ", I am " + age;

// Escaping
val = "That's awesome";

// string.length property
val = firstName.length;

// string.concat(val1, val2)
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Treat string as arrays
val = firstName[2]; // 'h'

// string.indexOf(value)
val = firstName.concat(" ", lastName).indexOf("h"); // 2 --> first
val = firstName.concat(" ", lastName).lastIndexOf("h"); // 9 --> last
val = firstName.concat(" ", lastName).lastIndexOf("z"); // -1 if no result

// string.charAt(index)
val = firstName.charAt(2); // h
// Get last char
val = firstName.charAt(firstName.length - 1); // n

// string.substring(start, end)
val = firstName.substring(3, -1); // 'Joh'
// string.slice(start, end)
val = firstName.slice(-3, -2); // 'o' (Note: >< array.splice(start, length))
// string.substr(start, length)
val = firstName.substr(-3, 1); // 'o'
/* 
  substring() vs slice():

  In common:
    - start = stop ==> ''
    - stop is omitted ==> until end of the string
    - start || stop > string.length ==> until end of the string
  
  Only substring():
    - start > stop ==> swap the 2
    - start || stop < 0 or = NaN ==> treated = 0.

  Only slice():
    - start > stop ==> ''
    - start && stop < 0 ==> sets char from the end of string
*/

// string.split(value) ==> array --> used for strings (' '), tags (',')...
val = firstName.split("o"); // ['J', 'hn']
bool = Array.isArray(val); // true

// string.replace(finding, replace)
val = firstName.replace("oh", "ua"); // Juan

// string.inclues(value)
val = firstName.includes("oh"); // true

/***
 * TEMPLATE LITERALS = TEMPLATE STRINGS = ``
 ***/
addChapter("fundamentalsVars", "TEMPLATE LITERALS = TEMPLATE STRINGS = ``");

let html;

// Without template strings (ES5)
html = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li></ul>";
html =
  "<ul>" +
  "<li>Name: " +
  name +
  "</li>" +
  "<li>Age: " +
  age +
  "</li>" +
  "</ul>";

// With template strings (ES6)
html = `<ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
</ul>`;

// document.body.innerHTML = html

/***
 * ARRAYS & METHODS
 ***/
addChapter("fundamentalsVars", "ARRAYS & METHODS");

// Create arrays
let myArray = [55, 5, 15];
myArray = new Array(11, 1, 5);
myArray = ["A", "B", "C"];
myArray = ["Mixed", 123, 2, true, undefined, null, { a: 1, b: 2 }, new Date()];

// .length property
val = myArray.length;
// Check if is array
val = Array.isArray(myArray);
// Get single value
val = myArray[0]; // 'Mixed'
// Replace into array
myArray[0] = "NewMix"; // ['NewMix', 123, ...]

// .indexOf(value) method --> find value ==> -1 if not found
val = myArray.indexOf(123); // 1
// .find(function) method --> return first value found
function over50(num) {
  return num > 50;
}
val = myArray.find(over50); // 123

/** Mutating arrays **/
// array.push(value) --> add on to end
val = myArray.push("end"); // val === 9 >< myArray ==> [..., 'end']
// array.unshift(value) --> add on to front
val = myArray.unshift("front"); // val === 10 >< myArray === ['front', ...]
// array.pop() --> delete from end
val = myArray.pop(); // val === 'end' >< myArray ==> deleted 'end'
// array.shift() --> delete from front
val = myArray.shift(); // val === 'start' >< myArray ==> deleted 'front'
// array.splice(start, delLength, addVals)
val = myArray.splice(5, 1, "not", "null"); // val === [null] >< myArray ==> deleted null + added 'not', 'null'
/* Important: 
  In common: replace existing array
  
  Differences:
  - push() and unshift() return array.length
  - pop() and shift() return value deleted
  - splice() return array of spliced/deleted values

  Note: array.splice(start, delLength, addVals) >< string.slice(start, end)
*/

// array.concat(array2)
val = myArray.concat(myArray);
/* Do not replace existing array */

myArray = ["ac", "ab", "c", "b"];
// array.reverse()
val = myArray.reverse();
// array.sort([function]) --> Important: sorting number from first number only
val = myArray.sort();
// Reverse sort strings
val = myArray.sort().reverse();
/* Both methods replace existing and return new array */

myArray = [123, 2, true, false];
// Properly sort numbers and booleans manually (NOT strings)
val = myArray.sort((x, y) => {
  return x - y;
});
// Proper reverse sort numbers and booleans (NOT strings)
val = myArray.sort((x, y) => {
  return y - x;
});

console.log(myArray);
console.clear();

/***
 * OBJECT LITERALS
 ***/
addChapter("fundamentalsVars", "OBJECT LITERALS");

/* 
  Important !
  - variables associated to an object = property
  - functions associated to an object = method
*/

const persona = {
  firstName: "John",
  lastName: "Smith",
  age: 35,
  hobbies: ["music", "sports"],
  address: {
    city: "Marseille",
    country: "France"
  },
  getBirthYear: function() {
    // ES5 function to have access to this
    const today = new Date();
    const year = today.getFullYear();
    return year - this.age;
  }
};

val = persona;
//  Get values
val = persona.firstName;
val = persona["lastName"];
val = persona.hobbies[0];
val = persona.address.country;
val = persona.address["city"];
val = persona.getBirthYear();

const people = [
  { name: "John", age: 40 },
  { name: "Claire", age: 30 },
  { name: "Tom", age: 20 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
console.clear();

/***
 * DATES & TIMES
 */
addChapter("fundamentalsVars", "DATES & TIMES");

const today = new Date();
let anotherDate = new Date("9-28-1985 11:22:33:44");
anotherDate = new Date("9/28/1985 11:22:33:44");
anotherDate = new Date("September 28 1985 11:22:33:44");

//  Get values
val = anotherDate.getMonth() + 1; // [0-11] + 1 --> 0 based value
val = anotherDate.getDate();
val = anotherDate.getDay(); // [0-6] --> 0 based value with Sunday = 0
val = anotherDate.getFullYear(); // getYear() is deprecated
val = anotherDate.getHours(); //getMinutes() getSeconds() getMilliseconds()
val = anotherDate.getTime(); // time stamp (millisecs since 01/01/1970)
val = anotherDate;

// Set values
anotherDate.setMonth(11 - 1); // 0 based value
anotherDate.setDate(24);
anotherDate.setFullYear(1983);
anotherDate.setHours(23); // setMinutes() setSeconds() setMilliseconds()

console.log(val);
console.clear();
