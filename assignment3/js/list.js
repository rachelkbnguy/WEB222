
// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload=function(){
    var fruitsname=document.querySelector("#fruitList");
    var list="<ol>";
   
    for(var i=0;i<fruits.length;i++){
       list+="<li>" + fruits[i]+"</li>";
    }
    list +="</ol>";
    
    fruitsname.innerHTML=list;

var dir=document.querySelector("#directory");
   var anotherList="<ul>";
    for(var i=0;i<directory.length;i++){
        anotherList +="<li>";
        if(directory[i].type=="file"){
        anotherList += directory[i].name;}
       else{
        anotherList += directory[i].name+"<ul>";
            for (var j=0;j<directory[i].files.length;j++){
                anotherList+="<li>"+directory[i].files[j].name+"</li>";
            }
           anotherList+="</ul>";
       }
         anotherList+="</li>";
    }
    anotherList += "</ul>";
    dir.innerHTML=anotherList;
};