// async means sync is a line by line executed it taken same amount of time this res and obj line are very much getting a time so using async function and await 

    //await means waiting a this line code executed after next line jump
async function fetchInfo(){
    let info=await fetch('https://dummyjson.com/products');
    let data=await info.json();
    console.log(data);
}
fetchInfo();