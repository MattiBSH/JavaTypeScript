# JavaTypeScript
JavaScript/TypeScript periode 1 aflevering


Period-1 Vanilla JavaScript, Es-next, Node.js, Babel + Webpack and TypeScript-1  


Explain and Reflect:
* Explain the differences between Java and JavaScript + node. Topics you could include:
Java is a compiled language and JavaScript a scripted language which means that javascript needs the v8 to compile while java has the compiling feature intertwined.  Java is both a language and a platform which means ...
* Explain generally about node.js, when it “makes sense” and npm, and how it “fits” into the node echo system.
NPM is the node package manager it installs the modules and manages the folders in a node project. npm keeps track on their website how many downloads it gets + other data which helps you pick the technology that you want to use.
* Explain about the Event Loop in JavaScript, including terms like; blocking, non-blocking, event loop, callback queue and "other" API's. Make sure to include why this is relevant for us as developers.
The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. 
What does it mean if a method in nodes API's ends with xxxxxxSync? : Method is Syncronys
*       Explain the terms JavaScript Engine (name at least one) and JavaScript Runtime Environment (name at least two) : 
V8 for chrome and The Heap and The Stack
* Explain (some) of the purposes with the tools Babel and WebPack and how they differ from each other. 
webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser
If Babel is a translator for JS, you can think of Webpack as a multi-translator that works with all kinds of languages (or assets). For example, Webpack often runs Babel as one of its jobs. 
*       Use examples from the exercises.
https://github.com/MattiBSH/JavaTypeScript/tree/master/Week4 
Explain using sufficient code examples the following features in JavaScript (and node)


* Variable/function-Hoisting
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
https://github.com/MattiBSH/JavaTypeScript/blob/master/Week1/Day1-javascript/hoisting.js 
* this in JavaScript and how it differs from what we know from Java/.net.
In JavaScript, functions are objects, and the value of "this" depends on how a function is called.


https://github.com/MattiBSH/JavaTypeScript/blob/master/Week1/Day1-javascript/this.js 


* Function Closures and the JavaScript Module Pattern 
A function inside a function making a kinda private function
https://github.com/MattiBSH/JavaTypeScript/blob/master/Week1/Day1-javascript/reusablemodclosures.js 
JVP: making a single module with everything inside


* User-defined Callback Functions (writing functions that take a callback)
* Explain the methods map, filter and reduce
https://github.com/MattiBSH/JavaTypeScript/tree/master/Week1/Day1-javascript 
Map makes new array, filter filters array, reduce can do a lot count votes and get the 
* Provide examples of user-defined reusable modules implemented in Node.js (learnynode - 6)
OS, FS: os for os information and fs for file specific manipulation and information retrieval.
https://github.com/MattiBSH/JavaTypeScript/tree/master/Week2/Week2node 
* Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, destructuring objects and arrays,   maps/sets etc.
Let is not hoisted, Var is but can be changed like var while const can’t be changed. 
Arrow Functions arrow functions there are no binding of this . In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever. With arrow functions the this keyword always represents the object that defined the arrow function. 
This: Can mean different things depending on how the function is structured. 
Rest Parameters : are used to create functions that accept any number of arguments.
Destructuring objects   and arrays. 
  

A map has a key and a value. 
Set objects are collections of values.
*        Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.
Like Java, JavaScript is also an object oriented language, but JavaScript does not use classes. In JavaScript you don't define classes and create objects from these classes. JavaScript is prototype based, not class based. To do inheritance, you can use any object instance as a prototype.
class Vehicle {
 constructor (name, type) {
   this.name = name;
   this.type = type;
 }
 getName () {
   return this.name;
 }
 getType () {
   return this.type;
 }
}
class Car extends Vehicle {
 constructor (name) {
   super(name, 'car');
 }
 getName () {
   return 'It is a car: ' + super.getName();
 }
}






* Explain and demonstrate, how to implement event-based code, how to emit events and how to listen for such events
https://github.com/MattiBSH/JavaTypeScript/blob/master/Week2/Week2node/DosDetector.js 
ES6,7,8,ES-next and TypeScript
* Provide examples with es-next, running in a browser, using Babel and Webpack
https://github.com/MattiBSH/JavaTypeScript/tree/master/Week4 
* Explain the two strategies for improving JavaScript: Babel and ES6 + ES-Next, versus Typescript. What does it require to use these technologies: In our backend with Node and in (many different) Browsers
Babel and friends supply libraries for extra content to use.
Typescript does the same and so much more. For example adding types.
Babel comes with a node but typescript needs to be installed. It also requires the place running it to be able to compile it.


* Provide examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics
It can find errors before normal javascript compiles it in the browser since the description of the variables makes it know more about the system. 
Interfaces make it easy to define an object.
* Explain how we can get typescript code completion for external imports.
Like so: export var moment: typeof import('moment');


*       Explain the ECMAScript Proposal Process for how new features are added to the language (the TC39 Process)
Stage 0: Strawperson — to allow input into specifications
Stage 1: Proposal — make the case for the addition, describe the solution and identify the potential challenges
Stage 2: Draft — describe the syntax and semantics using formal spec language
Stage 3: Candidate — states that further refinement will need feedback from implementations and users
Stage 4: Finished — states that the addition is ready for inclusion in the formal ECMAScript standard


Callbacks, Promises and async/await
Explain about (ES-6) promises in JavaScript including, the problems they solve, a quick explanation of the Promise API and:
* Example(s) that demonstrate how to implement our own promise-solutions.
https://github.com/MattiBSH/JavaTypeScript/blob/master/Week3/filterdir.js 
* Example(s) that demonstrate error handling with promises
https://github.com/MattiBSH/JavaTypeScript/blob/master/Week3/filterUser.js 
* Example(s) that demonstrate how to execute asynchronous (promise-based) code in serial or parallel
https://github.com/MattiBSH/JavaTypeScript/blob/master/Week3/filterUser.js 


Explain about JavaScripts async/await, how it relates to promises and reasons to use it compared to the plain promise API.
It is easier to understand when looking at, you use try catch to catch errors. Depending on the situation you can choose to do async, await serial or parallel.
This makes it perfect for all uses and pretty much replaces the old way of doing things.


Provide examples to demonstrate 


https://github.com/MattiBSH/JavaTypeScript/blob/master/Week3/fetchingpromises.js 




Til den endelige eksamen har jeg nok bedre eksempler, men ligenu er det her nok meget godt.
