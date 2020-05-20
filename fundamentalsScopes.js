/***
 * VAR & SECURITY RISK
 ***/
addChapter("fundamentalsScopes", "VAR & SECURITY RISK");

/* 
  Important:
  - 'var' is function scoped
  - 'let' and 'const' are block scoped
*/

/** GLOBAL SCOPE **/
var a = 1;
let b = 2;
const c = 3;

/** FUNCTION SCOPE **/
// ==> no impact on Global Scope
(function() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Function Scope: ", a, b, c); // 4, 5, 6
})();
console.log("Global Scope: ", a, b, c); // 1, 2, 3
console.clear();

/** BLOCK SCOPE **/
// ==> in Block scope only 'var' will change Global scope ==> security risk
if (true) {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("If Scope :", a, b, c); // 4, 5, 6
}
console.log("Global Scope: ", a, b, c); // 4(!), 2, 3
console.clear();

for (var a = 0; a < 10; a++) {
  // ==> same impact
  console.log("Loop scope: ", a); // 0...9
}
console.log("Global Scope: ", a, b, c); // 10(!), 2, 3
console.clear();

/***
 * EXECUTION CONTEXTS
 ***/
addChapter("fundamentalsScopes", "EXECUTION CONTEXTS");

/* 
  Execution contexts (ex. c.)
  - Information concerning variables that it will define, to which it will have access…
  - 1 execution context for each function execution 
    → store code info that is in the declaration of this function
  - for code out of the function ⇒ in the global ex. c. = unique ex. c.
*/

/** Execution stack **/
/*
  - start with global ex. c.
  - an ex. c. is added for each function executed
  - the highest in the stack is the active ex. c. = the one that is currently executing
  - when the code of a function ends, the ex. c. of this function is deleted from the stack
  - until coming back to the global ex. c.
*/

/** Ex. c. components **/
/*
  (i) Variable Objet = all vars and functions that will be defined / declared in this ex. c.
  (ii) Chain of Scopes = all vars / func. to which our ex. c. will have access
  (iii) “this” = the value of “this” = the object that will be associated to our ex. c
*/

/** 2 phases of the ex. c. **/
/*
  (1) the ex. c. creation → when the execution line is reached → when are determined the 3 components
  (2) the ex. c. execution → when its read the code line by line
*/

/***
 * (i) VARIABLE OBJECT (VO)
 ***/
addChapter("fundamentalsScopes", "(i) VARIABLE OBJECT (VO)");
/*
  - created and initialized during the ex. c. creation phase (1)
  - 1 per ex. c.
  - contains following vars:
    a. function’s / ex. c.’s arguments
    b. fonction’s declarations → enable hoisting
    c. vars’s declarations → hoisting
*/

/* Example 1 */
let name = "John"; // = 0.
function first() {
  let a = "Hello"; // = 1.
  second(); // ==> 2.
  let x = a + name; // = 5.
  console.log("first: ", x);
}
function second() {
  let b = "Hi"; // = 2.
  third(); // ==> 3.
  let y = b + name; // = 4.
  console.log("second: ", y);
}
function third() {
  let c = "Hey"; // = 3.
  let z = c + name; // = 3.
  console.log("third: ", z);
}
first(); // ==> 1.
/* 
        ---------------
  3. ==>    THIRD       creation  -> VO Third: c[undefined] z[undefined]
                        execution ->           c[Hey]       z[Hey John]   + delete THIRD ==> 4.
        ---------------
  2. ==>    SECOND      creation  -> VO Second: b[undefined] y[undefined]
                        execution ->            b[Hi]                     + 3.
  4. ==>                                                     y[Hi John]   + delete SECOND ==> 5
        ---------------
  1. ==>    FIRST       creation  -> VO First: a[undefined] x[undefined]
                        execution ->           a[Hello]                   + 2.
  5. ==>                                                    x[Hello John] + delete FIRST ==> -1.
        --------------- 
  0. ==>    GLOBAL      creation  -> VO Global: First Second Third name[John]
                        execution -> ==> 1.
        --------------- 
  -1. ==>   empty                      
        ---------------
        EXECUTION STACK
*/

/***
 * (ii) CHAIN OF SCOPES & FUNCTION SCOPE
 ***/
addChapter("fundamentalsScopes", "(ii) CHAIN OF SCOPES & FUNCTION SCOPE");
/*
  - Rule: child function has access to its parents' scope / VO
  - Important: declaration ==> child (not execution)
*/

/* Example 1, global view of all ex. c.: */
/* 
        ---------------
            THIRD       VO Third -> c[Hey] z[Hey John]
                        SCOPE -> VO Third --> VO Global
        ---------------
            SECOND      VO Second -> b[Hi] y[Hi John]
                        SCOPE -> VO Second --> VO Global
        ---------------
            FIRST       VO -> a[Hello] x[Hello John]
                        SCOPE -> VO First --> VO Global
        --------------- 
            GLOBAL      VO Global -> Second Third name[John]
                        SCOPE -> VO Global
        --------------- 
            empty                      
        ---------------
        EXECUTION STACK
*/

/* Example 2 */
let alpha = "Hello";
one();
function one() {
  let beta = "Hi";
  two();
  function two() {
    let gamma = "Hey";
    console.log("two: ", alpha + beta + gamma); // detla is not defined
    three();
  }
}
function three() {
  let delta = "Hola";
  console.log("three: ", alpha + delta); // beta & gamma are not defined
}
/* Example 2, global view of all ex. c.: */
/* 
        ---------------
            THREE       VO Three -> delta[Hola]
                        SCOPE -> VO Three --> VO Global
        ---------------
            TWO         VO Two -> gamma[Hey]
                        SCOPE -> VO Two --> VO One --> VO Global
        ---------------
            ONE         VO One -> two beta[Hi]
                        SCOPE -> VO One --> VO Global
        --------------- 
            GLOBAL      VO Global -> one three alpha[Hello]
                        SCOPE -> VO Global
        --------------- 
            empty                      
        ---------------
        EXECUTION STACK
*/
console.clear();

/***
 * BLOCK SCOPE (ES6)
 ***/
addChapter("fundamentalsScopes", "BLOCK SCOPE (ES6)");
/*
  - Reminder: only 'let' and 'const' are block scoped (>< 'var' is function scoped)
  - Rule: child block has access to parent's BLOCK scope only
  --> not looking at complete function’s scope, but each bloc’s scope
*/

/** Function vs Block scope **/
if (true) {
  var functionScopeVar = "toto"; // ==> function scope ==> Global scope only
}
console.log("var: ", functionScopeVar); // ==> Global scope ==> "toto"

if (true) {
  let blockScopeLet = "tata"; // ==> Block scope ==> child scope
}
// console.log("let: ", blockScopeLet); // ==> parent scope ==> "blockScopeLet is not defined"

/** Function scope and loop **/
var iVar = 99;
console.log("iVar 1: ", iVar); // VO Gobal: 99
for (var iVar = 0; iVar < 10; iVar++) {
  console.log("iVar 2: ", iVar); // VO Global: 0, ..., 9
}
console.log("iVar 3:", iVar); // VO Global: 10
/* 
  Memory --> VO Global: iVar consecutive values: 99, 0, ..., 9, 10
*/

/** Block scope and loop **/
let iLet = 99;
console.log("iLet 1:", iLet); // VO Gobal: 99
for (let iLet = 0; iLet < 10; iLet++) {
  console.log("iLet 2:", iLet); // VO Block: 0, ..., 9
}
console.log("iLet 3:", iLet); // VO Global: 99
/* 
  Memory --> VO Global: iLet[99] + VO Block: iLet consecutive values: 0, ..., 9
*/
console.clear();
