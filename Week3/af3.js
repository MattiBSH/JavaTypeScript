const URL = "https://swapi.dev/api/people/";
const fetch = require("node-fetch");
var now = require("performance-now")
var s = now()

async function fetchPerson(URL){
    const response = await fetch(URL);
    const sw1 = await response.json();
    return sw1;
}

//first version unparellel
async function printNames() {
  console.log("Before");
  const person1 = await fetchPerson(URL+'1'+"?format=json");
  const person2 = await fetchPerson(URL+'2'+"?format=json");
  console.log(person1.name);
  console.log(person2.name)
  console.log("After all"); 
}
var e = now()
  
//console.log("first: unPl"+(e-s).toFixed(3)) // ~ 0.002 on my system
var start = now()

//second
async function pn() {
  console.log("Before");
  const person1 =  fetchPerson(URL+'1'+"?format=json");
  const person2 =  fetchPerson(URL+'2'+"?format=json");
  const res1=await person1;
  const res2=await person2;
  console.log(res1.name);
  console.log(res2.name)
  console.log("After all"); 
}
  //printNames();
  
  //printNames();
  pn();
 
//printNames();

var end = now()

console.log("first: Pl"+(end-start).toFixed(3)) // ~ 0.002 on my system

