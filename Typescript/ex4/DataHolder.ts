class DataHolder<T> {
    _value: T;
    constructor(value){
        this._value=value;
    }
    setValue(value1){
        this._value=value1;
    }
    getValue(){
        return this._value;
    }
    public get value() {
        return this._value;
    }
    public set value(val) {
         this._value=val;
    }
  }
  
  let d = new DataHolder<string>("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());

let d2 = new DataHolder<number>(123);
console.log(d2.getValue());
d2.setValue(500);
//d2.setValue("børge");
console.log(d2.getValue());
  

//
//her er 3
let d5 = new DataHolder<string>("Hello");
console.log(d5.value);
d5.setValue("World");
console.log(d5.value);

let d6 = new DataHolder<number>(123);
console.log(d6.value);
d6.value =12;
//d2.setValue("børge");
console.log(d6.value);