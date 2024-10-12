let sum=0;
console.log(typeof(sum));

function isSum(n1,n2){
    for(let i=n1;i<=n2;i++){
        sum=sum+i;
    }
    console.log(sum);
}
isSum(4,40);
