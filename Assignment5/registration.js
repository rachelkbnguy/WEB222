function formCheck(){
    if(unameCheck()==true && passCheck()==true && rePassCheck()==true)
        return true;
    else
        return false;
}    
function unameCheck(){
    var uname = document.getElementById("username");
    var msg = document.getElementById("err_message");
    var strTest = uname.value.trim();
    var NumOfChar = strTest.length;
    var isnD = false;
   if(!msg.length){
        msg.innerHTML="";
    }
    
    if(isNaN(uname.value.trim().charAt(0))==true){
        isnD = true;
    }else{
        alert("Oops!!! Something's wrong");    
        msg.innerHTML="Error Message: Username must start with a letter and at least 6 characters";
        uname.focus();
        return false;
    }  

    if(NumOfChar>=6){
        return true;
    }else{
        alert("Oops!!! Something's wrong");    
        msg.innerHTML=("Error Message: Username must start with a letter and at least 6 characters");
        uname.focus();
        return false;
        }  
}    
function passCheck(){   
var pwrd = document.getElementById("pwrd");
var strTest=pwrd.value.trim();
var NumOfChar = strTest.length;
var msg = document.getElementById("err_message");
var upCase=false;
var loCase=false;
var num=false;
var flag =1;
if(!msg.length){
        msg.innerHTML="";
    }
if(strTest.toLowerCase()!= strTest){
    upCase = true;
}else{
    alert("Oops!!! Something's wrong"); 
    msg.innerHTML=("Error Message: Password must be 8 characters long, must start with a character, must haveat least 1 digit and 1 uppercase");
    pwrd.focus();
    return false;   
}
if(strTest.toUpperCase()!= strTest){
loCase= true;
}else{
    alert("Oops!!! Something's wrong"); 
    msg.innerHTML=("Error Message: Password must be 8 characters long, must start with a character, must haveat least 1 digit and 1 uppercase");
    pwrd.focus();
    return false;   
}
for(var i=0; i<strTest.length && flag;i++){
    if(strTest.charAt(i)>="0" && strTest.charAt(i)<="9"){
        num=true;
        flag=0;alert("3");
    }
}
if(num==false){
    alert("Oops!!! Something's wrong"); 
    msg.innerHTML=("Error Message: Password must be 8 characters long, must start with a character, must haveat least 1 digit and 1 uppercase");
    pwrd.focus();
    return false;   
}
if(NumOfChar>=8){
     return true;
}else{            
    alert("Oops!!! Something's wrong"); 
    msg.innerHTML=("Error Message: Password must be 8 characters long, must start with a character, must haveat least 1 digit and 1 uppercase");
    pwrd.focus();
    return false;  
} 
}
 
function rePassCheck(){
var repwrd = document.getElementById("repwrd");
var pwrdValue = document.getElementById("pwrd").value.trim();
var repwrdValue = repwrd.value.trim();
var msg = document.getElementById("err_message");
if(!msg.length){
        msg.innerHTML="";
    }
if(pwrdValue == repwrdValue){
    alert("Bingo! Passwords are matched!"); 
    return true;
}else{
    alert("Oops!!! Something's wrong"); 
    msg.innerHTML=("Error Message: Passwords are not matched");
    repwrd.focus();
    return false;  
    }
}
