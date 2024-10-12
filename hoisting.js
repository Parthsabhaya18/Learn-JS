//var keyword supports variable hoisting
console.log(a);
var a=10;
console.log(a);

//function hoisting is a only normal function support
sum()
function sum(){
    console.log("hello");
    
}
// arrow()   nnot support
// let arrow=()=>{
//     console.log("hello arrow");
    
// }

