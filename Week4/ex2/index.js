import fetch from 'node-fetch';
import "core-js/proposals/promise-any";
fetch("https://api.chucknorris.io/jokes/random")
.then(res=>res.json())
.then(data=>console.log(data.value));

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
const p1 = Promise.reject(0);
const p2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const p3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const pss = [p1, p2, p3];

Promise.any(pss).then((value) => console.log(value));

// expected output: "quick"
