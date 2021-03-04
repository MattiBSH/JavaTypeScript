var getAllAsArray;
var getAllAsArrayU;
getAllAsArray = function (a, b, c) {
    var result = [a, b, c];
    return result;
};
getAllAsArrayU = function (a, b, c) {
    var result = [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()];
    return result;
};
console.log(getAllAsArray("a", "b", "c"));
console.log(getAllAsArrayU("a", "b", "c"));
var f2 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = f1("a", "b", "c"), a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
var f3 = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = f1("a", "b", "c"), a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
f2(getAllAsArray);
f3(getAllAsArrayU);
