interface IMyFunc {
    (a: string, b: string, c:string): string[];
  }

  let getAllAsArray: IMyFunc;
  let getAllAsArrayU: IMyFunc;
  getAllAsArray = function (a, b,c) {
    let result = [a,b,c];
    return result;
  };
  getAllAsArrayU = function (a, b, c) {
    let result = [a.toUpperCase(),b.toUpperCase(),c.toUpperCase()];
    return result;
  };
  console.log(getAllAsArray("a","b","c"));
  console.log(getAllAsArrayU("a","b","c"));

  let f2 = function logger(f1: IMyFunc){
    //Simulate that we get data from somewhere and uses the provided function
    
    let [ a, b, c] = f1("a","b","c");
    console.log(f1(a,b,c));
}
let f3 = function logger(f1: IMyFunc){
    //Simulate that we get data from somewhere and uses the provided function
    
    let [ a, b, c] = f1("a","b","c");
    console.log(f1(a,b,c));
}

f2(getAllAsArray);
f3(getAllAsArrayU);