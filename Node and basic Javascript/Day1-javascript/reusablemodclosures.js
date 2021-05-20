/* var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    };
  })();
  
  console.log(counter.value());  // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value());  // 2.
  
  counter.decrement();
  console.log(counter.value());  // 1. */


function encapsulator(name1,age1){
    let name = name1;
    let age = age1;
      return {
         
          setAge: function (age2){
              age=age2;
              return "you have set the age"
          },
          setName: function (name2){
              name=name2;
              return "you have set the name"

          },
          getInfo: function() {
              return name+" "+age;
          }
      }
} 



let p=encapsulator("matti", 22);
console.log(p.getInfo());

console.log(p.setAge(100));
console.log(p.setName("børge"));
console.log(p.getInfo());


//es6 class version

class es6Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
}
setName(name2) {
    this.name=name2;
    return "success"
}
 setAge(age2) {
    this.age=age2;
    return "success"

}
 getInfo(){
    return "Your name is "+this.name+" and you are "+this.age+" year/years old";
}
  }
  let person = new es6Person("",0);
  console.log(person);

  person.setAge(1);
  person.setName("Harry");
  console.log(person.getInfo());
