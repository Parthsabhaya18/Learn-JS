// anonynous function is a without a function name is called as anonunous function 
    //  function(a,b){
    //     let b=a+b;
    //     console.log(b);
    //     return b;
    //  }


    // Anounous function 2 way:
    //  1.IIFE: immediatly invoked function expression : inside a bracket a function then as soon as call the function 
          
         (function(a,b){
                let c=a+b;
                console.log(c);
                // return console.log(c); 
         })(10,20);


        //  2.Function with expression :store the function in a variable and call the variable 

        let add=function(a,b){
            let sum=a+b;
            // console.log(sum);
            return sum;
        }
        // add(20,20);
        console.log(add(20,20));
   
        
        

