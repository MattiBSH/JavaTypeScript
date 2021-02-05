//functions are hoisted
console.log(typeof foo);
var foo = 'foo';
function foo() {
    var bam = 'bam';
    console.log(bam);
}

//var also hoisted but not with assignement
console.log(typeof foo);

var bim = 'bim';
function bam() {
    var bim = 'bom';
    
}
console.log(typeof bom);
console.log(bim);