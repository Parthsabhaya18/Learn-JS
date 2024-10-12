let c=0;
function isPrime(s,e)
 {
    for (let i = s; i <= e; i++) {
        for (let j = 2; j <s; j++) {
            if (i % j == 0) {
                 c++;
                break;
            }
            if(c==2){
                console.log(i);
                break;
            }
        }
    }
}
isPrime(35, 98);

