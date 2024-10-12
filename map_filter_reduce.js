let cart=[
    {
        id:101,
        model:"Swift",
        price:890000
    },
    {
        id:102,
        model:"Hondacity",
        price:1000000
    },
    {
        id:103,
        model:"Fortuner",
        price:4500000
    },
    {
        id:104,
        model:"tata-Punch",
        price:1200000
    },
    {
        id:105,
        model:"verna",
        price:1800000
    }
];

// map:--> map is a array inbuilt method.that is used to traves the array object to print. 
// let map1=cart.map((i)=>{
//     // return i;
//     return i.model;
// })
// console.log(map1);

        // for(let i=0;i<cart.length;i++){     
        //     console.log(cart[i].model);      this a simple way but using map is easy.
        // }



// filter:filter is array inbuilt method that is used to put the condition and return a value.
// let filter1=cart.filter((i)=>{
//     return i.price>=1200000;               //-->condition
// })
// console.log(filter1);

//reduce:reduce is array inbuilt method that is used to logic and their print
let reduce1=cart.reduce((sum,i)=>
    sum=sum+i.price,0  //sum=0 is here print
)
console.log(reduce1);

