function even(){
    let num=10;
    for(let i=0;i<5;i++)
    {
        if(i%2==0){
            console.log(i);
            num--;
        }
    }
    return num;
}
let data=even();
console.log(data);
