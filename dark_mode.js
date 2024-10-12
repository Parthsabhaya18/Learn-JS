let dark=document.querySelector("body");
dark.style.transition="3s";

function change(){

    if(dark.style.backgroundColor !="black"){
        dark.style.backgroundColor="black";
        dark.style.color="white";
    }
    else{
        dark.style.backgroundColor="white";
        dark.style.color="black";
    }
}