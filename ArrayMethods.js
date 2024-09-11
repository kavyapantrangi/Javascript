const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue
// Array Methods:

// Array Methods:

//concat method()
let myArray=[1,2,3,4];
myArray=myArray.concat(6,7,8);
console.log(myArray);
//join method
//it joins all elements of an array into a string
const b=myArray.join("&");
console.log(b);
const a=["a","b","c"];
const c=a.join("*");
console.log(c);
//pop()method

console.log(myArray.pop());
console.log(myArray.push(12));
console.log(myArray);
//shift method removes the first elememt in the array and returns
console.log(myArray.shift());
//unshift() method:adds new elements to the array and reeturns the new length of the array
myArray.unshift(90,80);
console.log(myArray);

//slice method: extracts the section of an array
console.log(myArray.slice(1,4));
//at() method returns the element at soecticied index:
//arry.at(-2):returns second last element
console.log(myArray.at(-3));
//splice() removes all elements from the array

const myA = ["1", "2", "3", "4", "5"];
myA.splice(1, 3, "a", "b", "c", "d");
console.log(myA);
//reverse() method reverse the elements
console.log(myArray.reverse());

//flat() method returns a new array with all subarray elements concatenated
let a1 = [1, 2, [3, 4,[33,44]],9];
a1= a1.flat().flat();
console.log(a1);

















