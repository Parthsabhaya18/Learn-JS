//createElemet is a create the element/tag and seen the brower.
let data1=document.createElement("h1");
//innertext is a inside a h1 tag put the text.
data1.innerText="this is a document object model....";
data1.style.backgroundColor="skyblue";

let image=document.createElement("img");
image.src="icecream.jpg";
image.style.border="5px solid black"

let para=document.createElement("p");
para.innerText="hello guys, My name is icecream and i am sweet and cold.........."
para.style.color="red";
para.style.fontSize="25px";


//getElementById is a visble the screen and body tag run using id selectors
let body=document.getElementById("jsp");
console.log(body);
body.appendChild(data1);
body.appendChild(image);
body.appendChild(para);

