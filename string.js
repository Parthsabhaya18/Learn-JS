let str="Strings in js";

console.log(str.length);

console.log(str[0]);
let char=str.charAt(0);
console.log(char);

let up=str.toUpperCase(str);
console.log(up);

let low=str.toLowerCase(str);
console.log(low);

let index=str.indexOf("i");
// let index=str.indexOf("i",4);
console.log(index);

let lindex=str.lastIndexOf("i");
console.log((lindex));

let slice=str.slice(2,7);
console.log(slice);

//split: convert string to array 
let arr=str.split(" "); //particular word 
// let arr=str.split(""); //particular char sequence
console.log(arr);

//replace: any char replace to another value
let re=str.replace("i",9);  //first occurence of value replace to 9.
console.log(re);

//replace all: specific all occurence replace to another value
let reall=str.replaceAll("i","parth");
console.log(reall);

//concatination : template literls
let a=201;
console.log(`javascript ${a} class`); //right way to cancatination 





