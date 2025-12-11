// understanding Variables
let name= "anuja";
console.log(name);

console.log("var -> reassign  redeclare");
var a= 10;
console.log("a=",a);
var a= 20;
console.log("a=20",a);
var a=80;
console.log("var a=80",a);
console.log("accessible outisde block");

{
    var b = 40;
}
console.log(b);

{
    let c= 20;
}
console.log(" let inside block ReferenceError: c is not defined"); 