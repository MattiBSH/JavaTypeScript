

// Map from the ground up by Matti Hansen
let arr=[1,2,2,4,45,5];

  Array.prototype.mapOwn=function(mapFunc){
    const mapArr = []; 
      
    for(let i=0;i<arr.length;i++) 
    {        const result = mapFunc(arr[i], i, arr); 
               mapArr.push(result);
                
            }    return mapArr;
        }
      
console.log(arr.mapOwn(num => num * 2));

// Filter from the ground up by Matti Hansen

Array.prototype.filterOwn = function(filterFunc) {
    const filterArr = []; 
        // start with an empty array        
        // i loop though the array    
        for(let i=0;i<arr.length;i++) 
        {        const result = filterFunc(arr[i], i, arr);        
            // if true then i push      
            if(result)             
            filterArr.push(arr[i]);     
        }    
        return filterArr;
  };


    console.log(arr.filterOwn(num => num > 2));
