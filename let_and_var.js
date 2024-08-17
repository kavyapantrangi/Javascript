Temporal dead zone:Between the hosting to the intilaization using let keyword:
  whenever we created a variable using let and  var  we can reassign the values.
let a;
a=10;
var b;
b=10;
console.log(a);
console.log(b);
b=90;
console.log(b);
//whenever we created variable by using the let keyword: It can create a separate memory space called script and defined in it.
but in var keyword it is stored in global scope so thats why var keyword declared varible can be accesed by window object unlikw let.
Example:
  let a;
a=10;
var b;
b=10;
console.log(a);
console.log(b);
b=90;
console.log(b);
a=20;
console.log(a);
console.log(window.a);
console.log(window.b);

output:

10
index.js:7 10
index.js:9 90
index.js:11 20
index.js:12 undefined
index.js:13 90
 ///Types of errors:
Reference error:Whenever we want access the variabe not declared or declared using let keyword need to be accesed before intilaization can give error
Type error:reassigning the values to the const var
  syntax error:Syntax related issue

