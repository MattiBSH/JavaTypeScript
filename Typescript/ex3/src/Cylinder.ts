import Circle from "./Circle";


class Cylinder extends Circle.Circle{
    height:number;
    constructor(color: string,radius: number,height: number){
        super(color,radius);
        this.height=height;
    }
     Volume(radius:number,height:number):number {
        return radius*height;
    }
    getheight(){
        return this.height;
    }
    setheight(height: number){
        this.height=height;
    }
}