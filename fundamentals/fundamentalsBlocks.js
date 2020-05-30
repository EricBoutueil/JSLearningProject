/***
 * IF & OPERATORS
 ***/
addChapter("fundamentalsBlocks", "IF & OPERATORS");

/*** COMPARISON OPERATORS ***/
const id = 100;

/*** IF ELSE ***/
// Equal to value '=='
if (id == 100) {
  val = "Correct";
} else {
  val = "Incorrect";
}

// Not equal to value '!='
if (id != 100) {
  val = "Correct";
} else {
  val = "Incorrect";
}

// Not equal to value & type '!=='
if (id !== 100) {
  val = "Correct";
} else {
  val = "Incorrect";
}

// Test if undefined
if (typeof id === "undefined") {
  val = "No id";
} else {
  val = `The id is ${id}`;
}

// other comp. operators: < > <= >=

/*** ELSE IF ***/
if (typeof id === "undefined") {
  val = "No id";
} else if (id === 100) {
  val = "Correct";
} else {
  val = "Incorrect";
}

/*** LOGICAL OPERATORS ***/
// Or operator
if (persona.age < 16 || persona.age > 65) {
  val = `${persona.firstName} should not work`;
  // And operator
} else if (persona.age >= 16 && persona.age <= 40) {
  val = `${persona.firstName} should work hard`;
} else {
  val = `${persona.firstName} should work... or not !`;
}

// Ternary operator
val = id === 100 ? "Correct" : "Incorrect";

/***
 * SWITCHES
 ***/
addChapter("fundamentalsBlocks", "SWITCHES");

const color = "red";
switch (color) {
  case "blue":
    val = "Color is blue";
    break;
  case "black":
  case "white":
    val = "Color is black or white";
    break;
  default:
    val = "Color is not blue nor black nor white";
    break;
}

const today = new Date();
switch (today.getDay()) {
  case 0:
    val = "Sunday";
    break;
  case 1:
    val = "Monday";
    break;
  case 2:
    val = "Tuesday";
    break;
  case 3:
    val = "Wednesday";
    break;
  case 4:
    val = "Thursday";
    break;
  case 5:
    val = "Friday";
    break;
  case 6:
    val = "Saturday";
    break;
  default:
    val = "";
    break;
}

/***
 * LOOPS AND ITERATIONS
 ***/
addChapter("fundamentalsBlocks", "LOOPS AND ITERATIONS");

/*** FOR LOOP ***/
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my favorite number");
    continue; // --> STOP the loop and go to next iteration
  }

  if (i === 5) {
    break; // --> break the loop
  }
  console.log(`Number ${i}`);
}
console.clear();

/*** WHILE LOOP ***/
let j = 0;
while (j < 10) {
  console.log(`Number ${j}`);
  j++;
}
console.clear();

/*** DO WHILE ***/
// Will always run at least once!
let k = 100;
do {
  console.log(`Number ${k}`);
  k++;
} while (k < 0); // ==> 'Number 100' only
console.clear();

/*** LOOP THROUGH ARRAY ***/
/** for loop **/
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
console.clear();

/** for in loop **/
for (let x in people) {
  console.log(people[x]);
}
console.clear();

/* Note: clearner way to iterate over arrays = .forEach() */
