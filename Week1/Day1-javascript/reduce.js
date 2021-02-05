//a
var komma= ["Lars", "Peter", "Jan", "Bo"].join(",");
var hash= ["Lars", "Peter", "Jan", "Bo"].join("#");
var whitespace= ["Lars", "Peter", "Jan", "Bo"].join(" ");
console.log(komma);console.log(hash);console.log(whitespace);
//b
var numbers = [2, 3, 67, 33]; 
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(reducer));
//c

let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]
   
   let getAverage = arr => {
    let reducer = (total, currentValue) => total + currentValue;
    let sum = arr.reduce(reducer)
    return sum / arr.length;
  }
  let ages = members.map(x => x.age);
  console.log(getAverage(ages));

  //d
  var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];
  var initialValue = {};

  var reducer3 = function(tally, vote) {
    if (!tally[vote]) {
      tally[vote] = 1;
    } else {
      tally[vote] = tally[vote] + 1;
    }
    return tally;
  }

  var result = votes.reduce(reducer3, initialValue);
  console.log(result);