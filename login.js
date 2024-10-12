function change(){
    let username1=document.querySelector('#uname').value;
    let password1=document.querySelector('#pswd').value;

    if(username1=='abcd'&&password1=='1234'){
        alert("Login In successfully!!");
    }
    else{
        alert("Invalid Account!!");
    }
}
function hide(){
    let pass=document.querySelector('#pswd');
    if(pass.type=='password'){
        pass.type="text";
    }
    else{
        pass.type="password";
    }
}