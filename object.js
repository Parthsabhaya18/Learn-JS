// object is a hetrogenus any type of data are stored--------
// three ways of object 
// 1. object using literals
// 2. object using constructor
// 3. object using class

    //************ */ 1. object using literals:
        
            let student={
                // syntax: keyName: value parseInt
                id:101,
                name:"parth",
                phone:2382738378,
                marks:[80,60],
                // object inside new object 
                parth_marks:{
                  sci:101,
                  math:102 
                }
            }

console.log();
console.log();

            // 4 operation : insert ,update,delete,view 
            // 1.view:
               console.log("Read the value----------------------");
               
                console.log(student);
                console.log(student.marks[0]);
                console.log(student.phone);
                
            // 2.insert/create: new add
                
                console.log("insert-create the value--------------------------");
                
               student.email="parth7@gmail.com";
               console.log(student);

            //    3.update:
                 console.log("update the value----------------------");
                 
                student.phone=8000993067;
                student.marks[1]=56;
                student.parth_marks.math=78;
                console.log(student);
                console.log(student.phone);

            // 4.delete:
             console.log("delete the value--------------------");
             delete student.id;
             console.log(student);
             
             
    //  ******** 2. object using constructor:

    console.log("using constructor --------------------");
    
           function emp(id,name,price){
            this.id=id;
            this.name=name;
            this.price=price;
           }
           let e1=new emp(101,"parth",25000.00);
           console.log(e1);
           
            

        //    *********3. object using class 

        console.log("using class-----------------------------");
        class bike{
            constructor(id,price,color,brand){
                this.id=id;
                this.price=price;
                this.color=color;
                this.brand=brand;
            }
        }
        let b1=new bike(101,89000,"black","splendor");
        console.log(b1);
        
        
                
               
               
                