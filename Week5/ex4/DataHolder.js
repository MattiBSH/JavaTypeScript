var DataHolder = /** @class */ (function () {
    function DataHolder(value) {
        this._value = value;
    }
    DataHolder.prototype.setValue = function (value1) {
        this._value = value1;
    };
    DataHolder.prototype.getValue = function () {
        return this._value;
    };
    Object.defineProperty(DataHolder.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
        },
        enumerable: false,
        configurable: true
    });
    return DataHolder;
}());
var d = new DataHolder("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());
var d2 = new DataHolder(123);
console.log(d2.getValue());
d2.setValue(500);
//d2.setValue("børge");
console.log(d2.getValue());
//Mangler stadig 3
var d5 = new DataHolder("Hello");
console.log(d5.value);
d5.setValue("World");
console.log(d5.value);
var d6 = new DataHolder(123);
console.log(d6.value);
d6.value = 12;
//d2.setValue("børge");
console.log(d6.value);
