/***
 * VSCODE EXTENSIONS
 ***/
addChapter("fundamentalsStart", "VSCODE EXTENSIONS");

/* 
  Emmet installed by default
    h1 + TAB ⇒ tags
    #test ⇒ div tags + id test
    .test ⇒ div tags + class test
    h1.test ⇒ h1 tags + class test
    ! ⇒ basic html doc

  Auto Close Tag
  Auto Rename Tag
  Bracket Pair Colorizer
  indent-rainbow
  Rainbow CSV
  Peacock (a color for each workspace)
  Import Cost

  (JavaScript (ES6) code snippets)
  Terminal
  ESLint
  Prettier - Code formatter (keep constant version -> 2.2.2)
  GitLens - Git supercharged
  GraphQL
  MJML
  Python

  Live Server → localhost auto refresh 
    start: right click on code + “open with LiveServer”
    stop: bottom of VSCode window: click on “Port : 5500”
  Live Share
  Live Share Audio
  Live Share Chat
  Live Share Extension Pack
*/

/***
 * BASIC CONCEPTS
 ***/
addChapter("fundamentalsStart", "BASIC CONCEPTS");

/** Generalities **/
/* 
  JS = client side ==> 1) manipulate html + css, 2) react to events 

  HTML: structure
  CSS: style / design
  JS: interactivity + logic = to code

  Transpiler → code translator into ES5 (syntax)
  Polyfill → ‘library’ / code to add functionalities to browser (object, function…)
*/

/** Comments **/
// Single line comment
/* Multi
line
comment*/

/** Log to console **/
console.log("Hello world");
console.log(123);
console.log(true);
var greeting = "Hello";
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({ a: 1, b: 2 });
console.dir({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });

console.error("This is some error");
console.warn("This is a warning");
console.time("Hello"); // --> 'Hello' = identifier
console.log("Hello");
console.timeEnd("Hello"); // ==> provide execution time of code
console.clear();
