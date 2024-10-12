//-->Simple Function
    function print(){
        console.log("Welcome To Our Program!!");
    }
    print(); //calling function


//--> Function with Parameter
    function add(a,b){
        let sum=a+b;
        console.log(sum);
    }
    add(10,20); //calling Function


//-->Function with parameter using Return Keyword and storing the value
    function add3(a,b,c){
        let total=a+b+c;
        return total; //using return keyword
    }
    let a1=add3(20,50,30)
    console.log(a1);
