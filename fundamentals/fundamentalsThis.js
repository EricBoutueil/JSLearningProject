/***
 * THIS IN ES5 FUNCTIONS
 ***/
addChapter("fundamentalsThis", "THIS IN ES5 FUNCTIONS");
/*
- Definition: Pointeur to access the object that has executed the method
*/

/** Global ex. c. **/
val = this; // Window object = the Global object

/** Function ex. c. **/
function functionThis() {
  val = this;
}
functionThis(); // Window object ==> do NOT depend on the function

/** Method ex. c. **/
const firstExecutingObject = {
  name: "Toto",
  methodThis: function() {
    val = this;
  }
};
firstExecutingObject.methodThis(); // object "firstExec. Toto"

/** Function vs Method ex. c. **/
const secondExecutingObject = {
  name: "Titi",
  methodThis: functionThis
};
secondExecutingObject.methodThis(); // object "secondExec. Titi" ==> same function, >< "this" !

/** Function ex. c. inside Method **/
const thirdExecutingObject = {
  name: "Tata",
  methodThis: function() {
    function insideFunction() {
      val = this;
    }
    insideFunction(); // Window object !
  }
};
thirdExecutingObject.methodThis();

/***
 * METHODS RELATED TO THIS
 ***/
addChapter("fundamentalsThis", "METHODS RELATED TO THIS");

/** bind method **/
// ==> create a new function to which we can set the value of 'this'
const functionThisBind = functionThis.bind(thirdExecutingObject);
functionThisBind(); // object "thirdExec. Tata"

const methodThisBind = secondExecutingObject.methodThis.bind(
  firstExecutingObject
);
methodThisBind(); // object "firstExec. Toto"

secondExecutingObject.methodThis.bind(thirdExecutingObject)(); // object "thirdExec. Tata"

// ==> set values of arguments for newly created function
function multiply(number1, number2) {
  return number1 * number2;
}
const multiplyByThree = multiply.bind(this, 3);
val = multiplyByThree(5); // 15

/** call & apply methods **/
// bind + execute the function --> only the syntaxe changes
function multiplyHi(number1, number2) {
  console.log("this Hi: ", this);
  console.log("result Hi: ", number1 * number2);
}
const hey = { greeting: "hey" };
multiplyHi(10, 1); // this = Window + 10
multiplyHi.bind(hey, 10, 2)(); // this = object hey + 20
multiplyHi.call(hey, 10, 3); // this = object hey + 30
multiplyHi.apply(hey, [10, 4]); // this = object hey + 40

console.clear();

/***
 * ARROW FUNCTIONS & THIS
 ***/
addChapter("fundamentalsThis", "ARROW FUNCTIONS & THIS");

/* 
  arrow function = "arg => value"
  --> simplified syntaxe + set 'this' value
*/
/** call & apply methods **/
console.log((arg => arg * 5)(val)); // 75 (log only) --> anonymous arrow IIFE
console.clear();

const myArrowFunction = arg => arg * 10; // arrow func. expression
val = myArrowFunction(val); // 150

const fourthExecutingObject = {
  name: "Tutu",
  methodThis: arg => arg * 2
};
val = fourthExecutingObject.methodThis(val); // 300

/** this & bind **/
const classicFunction = function() {
  val = this;
}; // (1)
classicFunction(); // Window object

const arrowFunction = () => (val = this); // (2)
arrowFunction(); // Window object

const classicFunctionBind = classicFunction.bind(this); // (3)
classicFunctionBind(); // Window object

const fifthExecutingObject = {
  name: "Tete",
  methodClassic: classicFunction, // (1)
  methodArrow: arrowFunction, // (2)
  methodClassicBind: classicFunctionBind // (3)
};

fifthExecutingObject.methodClassic(); // object "fifthExc. Tete"
fifthExecutingObject.methodArrow(); // Window !
fifthExecutingObject.methodClassicBind(); // Window !

/*
  Important:
  - arrowFunction will capture 'this' of PARENT scope = 'this' from where it has been declared
  - arrowFunction <=> classicFunction.bind(this)
*/
