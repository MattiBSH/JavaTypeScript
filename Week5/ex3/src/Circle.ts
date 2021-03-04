import Shape from "./Shape";

class Circle extends Shape.Shape{
    constructor(color:string,radius:number){
        super(color);
        this.radius=radius;
    }
    set setColor(color: string) {
      //  throw new Error("Method not implemented.");
    }
    radius:number;
    

    get area(): number {
        let a=this.radius;
        return 3.14*(a*a);
    }
    get perimeter(): number {
        return 3.14*this.radius;
    }
    get color(): string {
        return this.color;
    }
    
    get niceToString(): string {
        return `Radius: ${this.radius} Color: ${this.color}`
    }
}
const c = new Circle("asd",12);
console.log(c.perimeter);
c.setColor="blue"
console.log(c.area);
console.log(c.niceToString);
export default {
    Circle
  }