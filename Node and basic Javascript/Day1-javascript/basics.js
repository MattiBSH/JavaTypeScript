var persons = [
    {firstName:"John", lastName:"Doe", age:46},
    {firstName:"Joanne", lastName:"Doe", age:43}
];
let arrayf =persons.filter(x=>{
    return x.age>2;
})
console.log(arrayf);

let amap =persons.map(x=>{
    return "the age of the individual: "+ x.age+ " the name:" + x.firstName
})
console.log(amap);
