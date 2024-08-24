Prototype itself is an object.Prototype itself is also another object.The prototype has its own prototype.This creates a prototype chain.
  function Person(name,age)
{
   this.name=name;
   this.age=age;
}
Person.prototype.course="Cse";
const per1=new Person("kavya",20);
const per2=new Person("lavanya",21);
console.log(per1);
console.log(per2);


