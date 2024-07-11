// non-primitive datatype object
const student_details={
                        fullname:"parth sabhaya",
                        age:20,
                        degree:"BCA",
                        x:BigInt("67"),
                        isPass:true,
};

//edit 
student_details["age"] = student_details["age"] +2;  //modify
student_details["fullname"]="Zarana sabhaya"
console.log(student_details);
console.log(student_details["fullname"]); //this is a diffrent way to print
console.log(student_details.age);         //this is a different way to print 


//practise
const bio={
            username:"@the_parthsabhaya",
            followers:676,
            following:347,
            isFollow:true,
};
console.log(bio);
console.log(typeof bio);
console.log(typeof bio["username"]);

