abstract class IShape {
    private _color:string;
    constructor(color:string){
        this._color = color;
    }
    abstract get area():number;
    abstract get perimeter(): number;
    abstract get color():string;
    abstract set setColor(color:string);
    abstract get niceToString():string;
  }
  console.log("hohoho");
  