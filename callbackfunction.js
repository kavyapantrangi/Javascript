A function is passed as an argumnet to another function is called callback function:
function display(res)
{
    console.log(res);
    
}
function add(num1,num2,myCallback)
{
    let sum=num1+num2;
    myCallback(sum)
}
add(7,8,display);

    Anonymous Function in js are not declared with name:
    Example:
    Syntax:
    function( Parameters)
    {
      //code to be executed
    }
to access the function we will create an variable
Example:
let sum=function(x,y)
{
    return x+y;
}
console.log(sum(45,60));
