Function along its with lexical scope is called closures:
Example:
function x()
{
    var a=10;
    function y()
    {
        console.log(a);
        
    }
    return y;
}
var b=x();
console.log(b);
b();

Whenever function is returned ,even if it is vanished in execution context still rememebers it is pointing to.
