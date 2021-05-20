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


Period 2

Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using, for example, Java/JAX-RS/Tomcat
Javascript has a very easy setup because primarily npm. Node.js is non blocking which makes for faster systems. 
I think that node has.
better efficiency and overall developer productivity 
Everything seems easier when writing Node, this might be because it keeps getting updated and new features like async await makes life much easier as a developer.
speed and performance (it is always non blocking)
a huge number of free tools (Just use npm and you got everything you need, well almost)
You get to use Visual Studio which is a lot better than netbeans in my opinion … better debug tool for example but much more than just that.

Cons/pros for Java/JAX-RS/Tomcat

1 I guess it's untested, but can you really say that now or is that just becoming the excuse to still keep using old technology. 

2 If it was not for react native i would say that it makes it easier to develop an app version, but because of react native it really doesn’t. Don’t really know what to write here… (which might be a good thing)

Explain the difference between Debug outputs and ApplicationLogging. What’s wrong with console.log(..) statements in our backend code?
First of all console.log is very slow and makes your program slower. The debugger allows us to literally go into the function and see what happens step by step. Also strictly talking Debug outputs they only show up in development and therefore don’t hurt performance when hitting the clients.
Demonstrate a system using application logging and environment controlled debug statements.
Explain, using relevant examples, concepts related to testing a REST-API using Node/JavaScript/Typescript + relevant packages 
Explain a setup for Express/Node/Test/Mongo-DB/GraphQL development with Typescript. Focus on how it uses Mongo-DB (how secret values are handled, how connections (production or test) are passed on to relevant places in code, and if use, how authentication and authorization is handled
We use .env files to handle secure values, these values never hit GitHub because we put it in a gitignore. We have modes for development which makes it easy to debug and ensures that when hitting the client it does not slow down because of development dependencies. When online it writes logs to a document in which you can then look at on your server. Testing is easy using mocha chai supertest and noch you get everything you need to test a proper backend.
Explain, using relevant examples, the Express concept; middleware.
Middleware can 1 Execute any code. 2 Make changes to the request and the response objects. 3 End the request-response cycle. 4 Call the next middleware function in the stack.
Explain, conceptually and preferably also with some code, how middleware can be used to handle problems like logging, authentication, cors and more.
You can use middleware to handle cors, logging and authentication. 
https://github.com/MattiBSH/JavaTypeScript/blob/master/Week%207-Cors-Logs/startcode-day2/src/app.ts 
Explain, using relevant examples, your strategy for implementing a REST-API with Node/Express  + TypeScript and demonstrate how you have tested the API.
I have a facade in which I communicate with the mongoDB database in my app.js I make middleware and call routes in the routes I make endpoints where I use the facade to make changes to the database. But of course i also in the app.js handle if the user calls a non existing route. 
Explain, using relevant examples, how to test JavaScript/Typescript Backend Code, relevant packages (Mocha, Chai etc.) and how to test asynchronous code.
NoSQL and MongoDB 
Explain, generally, what is meant by a NoSQL database.
That it does not use sql. It has no relations.
Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.
Pros
1 Unlike rational database management model that is difficult to scale out when it come to commodity clusters NoSQL models make use of new nodes which makes them transparent for expansion. The model is designed to be used even with low cost hardwares. In this current world where outward scalability is replacing upwards scalability, NoSQL models are the better option.
2 Given the fact that transaction rates are rising due to recognition, huge volumes of data need to be stored. While rational models have grown to meet this need it is illogical to use such models to store such large volumes of data. However these volumes can easily be handled by NoSQL models
3 The best rational models need the service of an expert to design, install and maintain. However, NoSQL models need much less expert management as it already has auto repair and data distribution capabilities
cons
1 Rational models have been around for some time now compared to NoSQL models and as a result they have grown to be more functional and stable systems over the years.
 Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.
Indexes are special data structures that store a small portion of the collection's data set in an easy to traverse form. The index stores the value of a specific field or set of fields, ordered by the value of the field. We have used them to get data from the database.

Demonstrate, using your own code samples, how to perform all CRUD operations on a MongoDB
Like this : https://github.com/MattiBSH/JavaTypeScript/blob/master/startcode/src/facades/friendFacade.ts 
Demonstrate how you have set up sample data for your application testing
Like this : https://github.com/MattiBSH/JavaTypeScript/blob/master/startcode/test/friendFacadeTest.ts 
Explain the purpose of mocha, chai, supertest and nock, which you should have used for your testing
nock – “Nock is an HTTP mocking and expectations library for Node.js. Nock can be used to test modules that perform HTTP requests in isolation.”
Supertest – “High-level abstraction module for testing HTTP”
Mocha – “Mocha is a simple, flexible, fun JavaScript test framework for node.js and the browser”
chai – “Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.”
Explain, using a sufficient example, how to mock and test endpoints that relies on data fetched from external endpoints
Like this : https://github.com/MattiBSH/JavaTypeScript/blob/master/startcode/whattodotest.ts 
Explain, using a sufficient example a strategy for how to test a REST API. If your system includes authentication and roles explain how you test this part.  
Explanation: You can set the authentication in the test with using chai and supertest it is easy to see if what you get is what you want, you just have to ensure that you use no other facade methods. By standing by this principle we have uncorrupted tests, that can be trusted to test the methods without influence from the other methods.
Like this : https://github.com/MattiBSH/JavaTypeScript/blob/master/startcode/test/friendEndpointsTest.ts 
Explain, using a relevant example, a full JavaScript backend including relevant test cases to test the REST-API (not on the production database)
Explanation: A JavaScript Backend consists primarily of a DB, A facade, middleware and routes. However it of course also has a DB connector, tests for facade and endpoints. 
Link: https://github.com/MattiBSH/JavaTypeScript/tree/master/startcode  

Changes will come to this before the exam but as of now it is the best I can do. 

