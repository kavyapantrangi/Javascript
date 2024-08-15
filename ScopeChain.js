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








