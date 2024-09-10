//map is generally key nd value pair
let map=new Map();
//.set method is used to assign the values
map.set(1,'a');
map.set(2,'b');
map.set(3,'c');
map.set(4,'d');
console.log(map);
//to get all keys
console.log(map.keys);
//to get all values
console.log(map.values);
//checking
console.log(map.has(1));
console.log(map.get(1));
for(let [k,v]of map)
{
    console.log(k,":",v);
    
}
//for each method
console.log("using for each method");

map.forEach((k,v)=>
{
console.log(k,":",v);


}
);
map.forEach((v,k)=>
    {
    console.log(k,":",v);
    
    
    }
    );

