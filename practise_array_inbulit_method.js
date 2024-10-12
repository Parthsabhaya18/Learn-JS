let things=[
    {
        id:101,
        name:"suzuki",
        model:"Swift",
        price:800000
    },
    {
        id:102,
        name:"Tata",
        model:"Harrier",
        price:2500000 
    },
    {
        id:103,
        name:"Honda",
        model:"Amaze",
        price:900000
    },
    {
        id:104,
        name:"Toyota",
        model:"Legender",
        price:4500000
    }
];
let map1=things.map((i)=>{
    return i;
})
console.log(map1);

let filter1=things.filter((i)=>{
    return i.price>=1200000;
    
})
console.log(filter1);

let reduce1=things.reduce((sum,i)=>
    sum=sum+i.price,0
)
console.log(reduce1);


