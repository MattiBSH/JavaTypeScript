const { EventEmitter } = require("events");

class DOS_Detector extends EventEmitter {
    constructor(timeValue){
      super();  
      this.urls = new Map();
      this.TIME_BETWEEN_CALLS = timeValue;
    }
    addUrl = (url) =>{
      const time = new Date().getTime();
      console.log("some url was added...")
        //if it has url then
      if(this.urls.has(url)){
        console.log("And it exist already...")
        const deltaTime = time - this.urls.get(url) 

        if(deltaTime < this.TIME_BETWEEN_CALLS){
          console.log("And it came to damn fast...");
          console.log({url:url,timeBetweenCalls:deltaTime})
          this.emit("Dos detected");
          console.log("dos detected");
        }

      }
      this.urls.set(url,time);
    }
 }
 exports.module = DOS_Detector;