// 1.arrow function -->()=>
// 2.call back function --> inside higher order passing parameter using a callling function inside a using value call the function.
// 3.higher order --> higher order is a inside callback function and calling function and return a value its called higher order
// 4.first order --> normal function function add(){ }

// Arrow function :

// ()=>{

// }

// let add=(a,b)=>{
//     console.log("Arrow Function ");
//     return a+b;
// }
// console.log(add(10,20));

//first order func: is a normal function its called first order function
//call back fun: calc is a callback function.

function add(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}
function total(calc,x,y){      /* Total is a higher order function. higher order is a passing parameter and using argument call back function its called higher order.*/
    return calc(x,y);            
}
console.log(total(add,20,30));
// let num=total(add,20,30);
// console.log(num);


