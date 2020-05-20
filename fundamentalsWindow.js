// JS → client side → Window = Global object >< Node.JS → computer syst = envir.

/***
 * WINDOW METHODS
 ***/
addChapter("fundamentalsWindow", "WINDOW METHODS");

// // Alert
// alert('Hello World')

// // Prompt --> same as alert() + take an input from the user
// const input = prompt()
// val = input

// // Confirm
// if(confirm('Are you sure?')){
//   val = 'YES'
// } else {
//   val = 'NO'
// }

// .clearInterval / .clearTimeout / .close + all events

/***
 * WINDOW PROPERTIES
 ***/
addChapter("fundamentalsWindow", "WINDOW PROPERTIES");

// Window dimensions including console + scroll bar
val = window.outerHeight;
val = window.outerWidth;

// Window dimensions NOT including console nor scroll bar
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
window.scrollBy(10, 20);
val = window.scrollY; // 0 = no scroll or not possible
val = window.scrollX; // 0 = no scroll or not possible

/***
 *
 * WINDOW OBJECT
 *
 ***/
addChapter("fundamentalsWindow", "WINDOW OBJECT");

// Location
val = window.location; // complete location object
val = window.location + "toto"; // concatenated location.href + '/toto'
val = window.location.protocol; // 'http:' or 'https:' (including ':')
val = window.location.hostname;
val = window.location.port;
val = window.location.href; // complete url (protocol, port, hostname, search)
val = window.location.search; // search including initial ?
val = window.location.hash; // anchor including initial #

// Redirect
// window.location.href = "http://google.com"

// Reload
// window.onload = function() {
//   if (!window.location.hash) {
//     window.location = window.location + "#loaded";
//     window.location.reload(); // ==> inifinite reload if alone
//   }
// };

// History object
val = window.history;
val = window.history.length;
window.history.go(-1);

// Navigator object
val = window.navigator; // Not the window, nor the environement, but the browser itself
val = window.navigator.appName; // Netscape of IE
val = window.navigator.appVersion; // ~ userAgent --> regexp to extract nav. version
val = window.navigator.userAgent;
val = window.navigator.platform; // OS --> Win32 (Windows) or MacIntel (MacOS)
val = window.navigator.vendor;
val = window.navigator.language;

const showLocation = position => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const accuracy = position.coords.accuracy;
  coords = `Latitude : ${latitude} 
Longitude: ${longitude} 
Accuracy: ${accuracy} meters`;
  // console.log(coords)
};
const error = err => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};
const options = {
  enableHighAccuracy: true,
  timeout: 5000, // before callback invoked --> 0 ==> never invoked
  maximumAge: 0 // max cached position in milliseconds
};
window.navigator.geolocation.getCurrentPosition(showLocation, error, options);
// if not blocked, else undefined

// .document (core of the DOM) / .localStorage (API) / .fetch (API to make http requests)

/***
 *
 * SPECIFIC BEHAVIOURS
 *
 ***/
addChapter("fundamentalsWindow", "SPECIFIC BEHAVIOURS");

/* 
  Object becoming properties of the Global object / the Window object:
  - 'var' variables (1) (NOT 'const' / 'let')
  - undecleared variables (2), 
  - even if inside another ex. c. = ONLY IF the function is executed (2bis)
  - functions declared in the Global ex. c. (3)
*/
var windowVar = "Toto WindowVar"; // (1)
function windowFunction() {
  windowFunctionVar = "Toto WindowFunctionVar"; // (2)
} // (3)
windowFunction(); // (2bis)
val = this;

/* 
  Important: 'use strict' allows to prohibit undeclared variables
*/
("use strict"); // ONLY WORKS IF on first line of file
varNotDefined = "Toto error"; // varNotDefined is not defined
