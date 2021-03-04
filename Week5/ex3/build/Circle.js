"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = __importDefault(require("./Shape"));
class Circle extends Shape_1.default.Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    set setColor(color) {
        //  throw new Error("Method not implemented.");
    }
    get area() {
        let a = this.radius;
        return 3.14 * (a * a);
    }
    get perimeter() {
        return 3.14 * this.radius;
    }
    get color() {
        return this.color;
    }
    get niceToString() {
        return `Radius: ${this.radius} Color: ${this}`;
    }
}
const c = new Circle("asd", 12);
console.log(c.perimeter);
c.setColor = "blue";
console.log(c.area);
console.log(c.niceToString);
exports.default = {
    Circle
};
//# sourceMappingURL=Circle.js.map