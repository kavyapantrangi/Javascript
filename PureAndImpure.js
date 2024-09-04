Pure Function in js means that returns the same result if the same arguments are passed.
  -->The Return value of the function call shold be only dependent on the input function arguments.
  -->The function should not have reassigning of the non-local variables,mutating the state of any part of code.
  Example:
function greeting(name)
{
  return `Hello ${name}`;
}
console.log(greeting("kavya"));
  Impure Functions:
Impure functions are those which return inconsistent ouput for the same arguments passed in  function.
  -->It will have sied effects.
  Example:
let msg="good morning";
function greeting(name)
{
  return `hello${name},${message}`;
}
console.log(greeting("kavya"));

  
