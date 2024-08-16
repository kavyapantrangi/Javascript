case 1:

function a()
{
    console.log(b);
}
var b=10;
a();
//here we can access a and 10 can be the output
case 2:
function a()
{
    c();
    function c()
    {
    console.log(b);
    }

}
var b=10;
a();//op:10


case3:##################


function a()
{
    var b=10;
    c();
    
    function c()
    {
    console.log(b);
    }

}

a(); op:10

#################case 4:
  function a()
{
    var b=10;
    c();
    
    function c()
    {
    console.log(b);
    }

}

a();
console.log(b);
op:not defined

###lexical environment:
    It is the parent hierarchy of the function:
It is created when global execution context is created
it is memory location+ref to the lexical environment to its parent
function a()//global execution context is the lexical environment
{
    var b=10;
    c();
    
    function c()// a() is lexical environment
    {
    console.log(b);
    }

}

a(); op:10
Scope: theblock which variable is accessed .




