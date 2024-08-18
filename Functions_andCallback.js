function fn1(x)
{
    function fn2(y)
    {
        return x*y;
    }
    return fn2;
}
let res=fn1(4);
console.log(res);
console.log(res(2));

