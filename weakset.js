Weakset is a collection of objects and not values of some particular type.
  function weak() {
    let weakSetObject = new WeakSet();
    let objectOne = {};
    
    // add(value)
    weakSetObject.add(objectOne);
    console.log("objectOne added");
    
    // has(value)
    console.log("WeakSet has objectOne : " +
                    weakSetObject.has(objectOne));
}
weak();
