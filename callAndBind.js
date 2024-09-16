/call method:
//invokes the call() method invokes a function a given this value and argument
var emp1={fname:'kavya',lname:'pantrangi'};
var emp2={fname:'ramesh',lname:'pantrangi'};
function invite(greeting1,greeting2)
{
    console.log(greeting1+' '+this.fname+' '+this.lname );
    
    
}
invite.call(emp1,'Hello','How are u?');
invite.call(emp2,'Hello','How are u?');
