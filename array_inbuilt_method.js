let arr1=[10,"hi","hello","hi",true,null];
console.log(arr1);

//push method : last insert
// arr1.push("parth",2618);
// console.log(arr1);

//pop method : last out
// arr1.pop();
// console.log(arr1);

// unshift method : first insert 
// arr1.unshift("hello",8000993067);
// console.log(arr1);

//shift method: first out
// arr1.shift();
// console.log(arr1);

//splice method : first is a index position (1) | second is a count the element delete | (not a reqired)same position any data add so you can add
// arr1.splice(1,2,"banglore","jsp");
// arr1.splice(1,0);
// console.log(arr1);

// slice method: starting position | ending position (note):ending position is a explositing not count .
//                  not affceted original array so new variable we can store 
// let sli=arr1.slice(0,3);
// console.log(sli);

// reverce method: reverece the array
// arr1.reverse();
// console.log(arr1);

//toString method:conver array To String and can't affect to original arrya we can store the value new variable
// let str=arr1.toString();
// console.log(str);

//join method: is simlilar to tostring method.convert to array to string but any symbol can use beetween string.
// let str1=arr1.join("  ");
// console.log(str1);

// includes method:in array present inside so return true or not inside so return false.and  to check after (4) position to prsent so using.

// let inc=arr1.includes("hi");
// let inc=arr1.includes("hi",4);
// console.log(inc);

// indexOf method: to display index no. and after the position the inside value so index no return
// let ind=arr1.indexOf("hi");
// let ind=arr1.indexOf("hi",2);
// console.log(ind);

// lastindexOf method:to display last index no
// let last=arr1.lastIndexOf(true);
// let last=arr1.lastIndexOf("hi",3);
// console.log(last);