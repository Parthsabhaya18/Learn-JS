let heading=document.getElementById("head");
console.log(heading);
heading.innerText="This is a heading Text.. getElementById";
heading.style.color="skyblue";

//getElementsByClassName is a browser stores array homogenus and hetrogunus element beacuse class is a multiple tag use
let p=document.getElementsByClassName("jsp");
console.log(p);     //see console in the inspect
// console.log(p[0]);
p[0].innerText="This is a paragraph getElementsByClassName"; //p tag
p[1].innerText="This is a div getElementsByClassName";     //div tag

//getElemntsByTagName is a particular element select and their saved as a array formate beacuse same element are many element
let tag=document.getElementsByTagName("h4");
console.log(tag);
tag[0].innerText="i am H4 getElementsByTagName";

//querySelector is use any type of id,class,tagname data are accpted..only use of querySelector is a all the work
// let query=document.querySelector("#head");
// console.log(query);
// query.innerText="i am head of query selector querySelector";

let b1=document.querySelector(".jsp");
console.log(b1);
b1.innerText="i am query of jsp querySelector";

//querySelectorAll means you can define class are class are which tag present is a select all the tag and array formate saved [node list]
let b11=document.querySelectorAll(".jsp");
console.log(b11);
b11[0].innerText="i am query of jsp querySelectorAll";
b11[1].innerText="i am query 2 querySelectorAll";

//all bold tag are selected and array formated saved [node List]
let b2=document.querySelectorAll("b");
console.log(b2);
b2[0].innerText="i am bold 1 querySelectorAll";
b2[1].innerText="i am bold 2 querySelectorAll"

