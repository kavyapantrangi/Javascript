Block:A set of js lines which gives an uinque output.
  Shadowing in js:block can be shadows the global scope
let a=10;
{
    var c=50;
    let a=40;
    const b=20;
    console.log(a);
    console.log(b);
    console.log(c);
    
    
}
console.log(a);


output:// 40 20 50 10 
var is in global scope ,let and const are in block scope
shadowing using let keyword will be stored in seperate block of called script
