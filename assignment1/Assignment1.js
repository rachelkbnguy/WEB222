/********************************************************************************* 
* WEB222 – Assignment 01 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of  
* this assignment has been copied manually or electronically from any other source (including web sites)  
* or distributed to other students. 
* 
* NAME: KHAI BINH NGUY (RACHEL)
* ID: 126463165
* DATE: 05/19/2017
*****************************/

/*****************************
* Task 1
*****************************/
var studentName = "KHAI BINH NGUY"; 
var numberOfcourses = 5;
var program = "CPA-Computer Programing and Analysis";
var parttimeJob = 1;
console.log("My name is "+studentName+" and I'm in "+program+". I'm taking "+numberOfcourses+" courses in this semester.");
var status=(parttimeJob==1)?"have":"don't have";
console.log("My name is "+studentName+" and I'm in "+program+". I'm taking "+numberOfcourses+" courses in this semester and I "+status+" a part-time job now.");
/*****************************
* Task 2
*****************************/
var currentYear="2017";
var age = prompt("Please enter your age:");
var birthYear = +currentYear-age
 console.log("You were born in the year of "+birthYear+".");
var expectYearcollege=prompt("Enter the numver of years you expect to study in the college:");
console.log("You will graduate from Seneca college in the year of "+expectYearcollege+".");
/*****************************
* Task 3
*****************************/
var cTemp = 18;
var fahrenheit = cTemp*1.8+32;
console.log(cTemp+"ºC is "+fahrenheit.toFixed(2)+"ºF.");
var fTemp = 72;
var celsius = (fTemp-32)/1.8;
console.log(fTemp+"ºF is "+celsius.toFixed(2)+"ºC.");
/*****************************
* Task 4
*****************************/
var status = "";
for(var num = 0; num <= 10; num++){
  if(num % 2 ==0){
  status += num + " is even\n";
  }else{
  status += num + " is odd\n";
  }
}
console.log(status);
/*****************************
* Task 5
*****************************/
function largerNum(num1,num2){
  return (num1-num2>0)?num1:num2;
}
var largerNo = function(no1,no2){
  return (no1-no2>0)?no1:no2;
};
console.log("The larger number is "+largerNum(13,14));
console.log("The larger number is "+largerNo(4,3));
/*****************************
* Task 6
*****************************/
function evaluator(){
  var noScores = 0;
  for(var i=0;i<arguments.length;i++){
    noScores += arguments[i];
  }
  return((noScores/arguments.length)>=50)?"True":"False";
}
console.log("Average greater than or equal to 50: "+evaluator(100,20,30));
console.log("Average greater than or equal to 50: "+evaluator(1,2));
console.log("Average greater than or equal to 50: "+evaluator(50));
/*****************************
* Task 7
*****************************/
var grader = function(noScore){
  var grade = 0;
  if(noScore>= 80){
    grade = "A";
  }else if(noScore>=70) {
       grade = "B";
  }else if(noScore>= 60){
       grade = "C";
  }else if(noScore>= 50){
       grade = "D";
  }else{
       grade = "F";
}
  return grade;
}
 console.log("The grade of the score is "+ grader(89));
 console.log("The grade of the score is "+ grader(69));
 console.log("The grade of the score is "+ grader(71));
/*****************************
* Task 8
*****************************/
function showMultiples(num,numMultiples){
    var result ="";
    for(var i=1;i<=numMultiples;i++){
      result += num+ " x "+numMultiples+" = "+ num * i+"\n";
    }
  return result;
  }
console.log(showMultiples(5,4));
console.log(showMultiples(6,6));
console.log(showMultiples(9,10));
