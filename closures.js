let a=10;
let b=20;
function parent(){
    let c=10;
    console.log(a+b+c);
    function child(){
        let d=40;
        console.log(a+b+c+d);
    }
    child();
}
parent();