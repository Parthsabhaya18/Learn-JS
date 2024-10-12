// three statment:
// 1.pending
// 2.resolve -- .then and .catch
// 3.reject

// fetch the data search json placeholser and copy link 
let data=new Promise((res,err)=>{    
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
        console.log(res);
        res.json()  //convert json object
        .then((resMessage)=>{
            console.log(resMessage);
            })
    .catch((errMeassage)=>{
        console.log(errMeassage);   
            })
})
.catch((err)=>{
    console.log(err);
})
})
