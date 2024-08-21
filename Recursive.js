setTimeout(function()
{
    console.log("Hellor Kavya");
    
},2000)
Recursive function :A function that calls itself is called recursive
function countdown(num)
{
    console.log(num);
    num--;
    if(num>0)
    {
        countdown(num);
    }
    
}
countdown(10);
