//array destructring
let arr=[10,20,40,10,24];
let [a1,a2,a3,a4,a5]=arr;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

//object destructring
let obj={
    id:101,
    name:"parth",
    marks:34
}
let {id,name,marks}=obj;
console.log(id);
console.log(name);
console.log(marks);

//backtick
let new1="parth";
let new2="bhargav";
console.log(`My name is ${new1} another my friend name is ${new2}`);
