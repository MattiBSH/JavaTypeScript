"use strict";
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this.height = height;
    }
    Volume(radius, height) {
        return radius * height;
    }
    getheight() {
        return this.height;
    }
    setheight(height) {
        this.height = height;
    }
}
//# sourceMappingURL=Cylinder.js.map