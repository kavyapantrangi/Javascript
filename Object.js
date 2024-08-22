Code:
const Person={
    fname:"Kavya",
    Lname:"Pantrangi",
    age:"12",
    address:{
        city:"Banglore",
        state:"Karnataka",
        pincode:"523631"
    }
}
//to print the total output
console.log(Person);
//to access the value
console.log(Person.fname);
console.log(Person.Lname);
//to access using the loop
for(let prop in Person)
{
    console.log(prop," ",Person[prop]);
}
//to know when it is present in it or not
console.log("age" in Person);
//to know the type
console.log(typeof Person);














output:
Kavya
 Pantrangi
 fname   Kavya
Lname   Pantrangi
age   12
 address   Object
 true
 object
