/***
 * FIRST CLASS OBJECTS
 ***/
addChapter("fundamentalsFunctions", "FIRST CLASS OBJECTS");

/* 
  First class objects = can be
  - an argument, 
  - a returned value (*)
  - or stored into / assigned to a variable / object (**)
*/

function myFunction() {
  return function(x) {
    return x * x;
  };
}

/*** DECLARATION ***/
console.log("Declaration: ", myFunction);

/*** EXECUTION ***/
console.log("Execution: ", myFunction());

/*** ASSIGNATION OF EXECUTION / FUNCTION AS RETURNED VALUE ***/
// assignation of function as returned value (*)
const returnedFunction = myFunction();
console.log("returnedFunction: ", returnedFunction);

/*** (EXECUTION OF) FUNCTION AS RETURNED VALUE ***/
// execution of function as returned value (*)
console.log("Returned function execution: ", myFunction()(5)); // execurtion of (*)
console.log("returnedFunction execution: ", returnedFunction(5));

console.clear();

/*** FUNCTION DEFAULT VALUE (ES6) ***/
function greet(firstName = "John", lastName = "Smith") {
  // // Before default value
  // if(typeof firstName === 'undefined'){firstName = 'John'}
  // if(typeof LastName === 'undefined'){LastName = 'Smith'}
  return (val = `Hello ${firstName} ${lastName}`);
}
greet();

/*** FUNCTION EXPRESSIONS ***/
// = Function assigned to a variable (**)
// Has some advantages for no hosting, closures...
const square = function(x = 5) {
  return (val = x * x);
};
square();

/*** OBJECT METHODS ***/
// = Functions assigned to an object (**)
const todo = {
  add: function() {
    val = "Add todo...";
  },
  edit: function(id) {
    val = `Edit todo ${id}`;
  }
};
todo.delete = function(id) {
  val = `Delete todo ${id}`;
};

todo.add();
todo.edit("3");
todo.delete("5");

/***
 * FUNCTION HOISTING
 ***/
addChapter("fundamentalsFunctions", "FUNCTION HOISTING");

// Functions declaration ONLY are 'hoisted at the top'
addition(5, 4);
function addition(a, b) {
  val = a + b; // ==> 9
}

// Function expressions are NOT hoisted
// multiplication(5,4); // ==> cannot access before initialization
const multiplication = function(a, b) {
  val = a * b;
};

/***
 * CLOSURES
 ***/
addChapter("fundamentalsFunctions", "CLOSURES");

/* 
  = RETURNED INNER / NESTED function ["enclosed with" = "+"] its lexical environment (= references to its surrounding state)
  = returned function "+" access to the variables of its OUTTER / PARENT function's scope
  = inner function returned from outer function BEFORE being executed 
  --> access outter variables even when the outter function has finished being executed = its ex. c. has been deleted from the ex. stack
  Note: if series of nested functions ==> access to ALL outer function scopes
*/

/* Example 1 */
function mutiplyBy(number) {
  const closedVariable = number; // variable that will be enclosed with the closure
  return function(anotherVariable) {
    return closedVariable * anotherVariable;
  };
}
const mutiplyByFive = mutiplyBy(5);
const mutiplyByThree = mutiplyBy(3);

val = mutiplyBy; // = "function factory"

val = mutiplyByFive; // = 1. ==> closure with enclosed closedVariable[5]
val = mutiplyByThree; // = 2. ==> closure with enclosed closedVariable[3]

val = mutiplyByFive(2); // = 3. ==> 10
val = mutiplyByThree(2); // = 4. ==> 6

/* Example 1, at the end of multiplyBy(3) execution 
  ==> multiplyBy(5) ex. c. is deleted + multiplyBy(3) ex. c. is going to be deleted */
/* 
        ---------------
  2. ==> multiplyBy(3)  VO mutiplyBy(3) -> number[3] + anonymous func (3) + closedVariable[3]
        ---------------
  1. ==>(multiplyBy(5)) (VO mutiplyBy(5) -> number[5] + anonymous func (5) + closedVariable[5])
        --------------- 
  0. ==>    GLOBAL      VO Global -> multiplyBy + multiplyByFive + multiplyByThree
        --------------- 
            empty                      
        ---------------
        EXECUTION STACK
*/

/* Example 1, at the end of multiplyByThree(2) execution 
  ==> multiplyBy ex. c. have been deleted twice BUT its respective closedVariables stay available 
  ==> anonymous function (5) in multiplyByFive has enclosed the closedVariable[5] of parent scope
  ==> anonymous function (3) in multiplyByThree has enclosed the closedVariable[3] of parent scope */
/* 
        --------------------
  4. ==> multiplyByThree(2)   VO mutiplyByThree(2) -> anotherNumber[2]
        --------------------
  3. ==> (multiplyByFive(2))  (VO mutiplyByFive(2) -> anotherNumber[2])
        --------------------
  2. ==> (multiplyBy(3))      (VO mutiplyBy(3) -> number[3] + anonymous func (3) + closedVariable[3])
        --------------------
  1. ==> (multiplyBy(5))      (VO mutiplyBy(5) -> number[5] + anonymous func (5) + closedVariable[5])
        -------------------- 
            GLOBAL            VO Global -> multiplyBy + multiplyByFive
        ------------------ 
            empty                      
        ------------------
        EXECUTION STACK
*/

/* Example 2  - buttons to adjust text size */

/* css */
/* 
  body { font-size: 12px}
  h1 { font-size: 1.5em}
  h2 { font-size: 1.2em} 
*/

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + "px";
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);

document.getElementById("size-12").onclick = size12;
document.getElementById("size-14").onclick = size14;
document.getElementById("size-16").onclick = size16;

/*
  Important notes:
  - these closure's parent are "function factory"
  - these closures share same function body definition but store different lexical envir.
  - closure allow to associate data (lexical envir.) with a function that operates on that data
  ==> ~= an object is object-oriented programming, with with properties and ONLY a single method
  - every closure has 3 scopes: local + outer functions (various if nested) + global
*/

/***
 * IIFES - IMMIDIATELY INVOKABLE FUNCTION EXPRESSIONS
 ***/
addChapter("fundamentalsFunctions", "IIFES");

/* 
  function declaration in () + directly executed with ()
  = simple way to isolate variables declarations
  ==> variables declared in this IIFE will NOT pollute the global object
  --> notably usefull for Module Design Pattern (cf. next chap. Emulating private methods)
  Note: need ';' at end of previous block or before declaration's ()
*/

(function() {
  return (val = "IIFE ran!");
})();

(function(myName) {
  var codeName = myName + "-007";
  console.log("Inner codeName:", codeName);
})("James");
// console.log("Outer codeName: ", mycodeNameName); // not defined

/* 
  Note: with ES6 'let' and its block scope provide similar "antipollution" value for simple variables
*/
{
  let myPassword = "12345";
  console.log("Inner myPassword:", myPassword);
}
// console.log("Outter myPassword:", myPassword) // not defined
console.clear();

/***
 * EMULATING PRIVATE METHODS WITH CLOSURES + IIFES
 ***/
addChapter(
  "fundamentalsFunctions",
  "EMULATING PRIVATE METHODS WITH CLOSURES + IIFES"
);

/*
  ==> variables declared in this IIFE will be private
  ==> only returned functions = closures will be public
  --> these closures follow the Module Design Pattern ~= modules
  Note: these modules are not ES6 modules (which will allow to not have to use IIFEs)
*/

const passwordModule = (function() {
  var myPassword = "12345";

  function checkPassword(inputPassword) {
    if (myPassword === inputPassword) {
      return true;
    } else {
      return false;
    }
  }

  function setPassword(confirmPwd, newPwd = confirmPwd) {
    if (checkPassword(confirmPwd)) {
      myPassword = newPwd;
    } else {
      return (val = "Error during process");
    }
  }

  function getPasswordInitial() {
    return myPassword[0] + "*****";
  }

  return {
    setPassword: setPassword,
    getPasswordInitial: getPasswordInitial
  };
})();

// val = myPassword // not defined
// checkPassword("123") // not defined
// setPassword("123", "0123") // not defined
// getPasswordInitial() // not defined

// val = passwordModule.checkPassword("12345"); // not a function
// passwordModule.setPassword("123", "321"); // "Error during process"
passwordModule.setPassword("12345", "0123");
val = passwordModule.getPasswordInitial(); // 0******
