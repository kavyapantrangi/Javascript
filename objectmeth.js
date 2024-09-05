Object.freeze()
it will make the object imuttable and prevention of adding properties.
  let data={
    a:10
};
Object.freeze(data);
data.a=20;
data.a=30;
console.log(data);
  //


//Object.seal()
will prevent the addition of new properties but modify the values
let data={
    a:10
};
Object.seal(data);
data.a=20;
data.c=30;
console.log(data);
