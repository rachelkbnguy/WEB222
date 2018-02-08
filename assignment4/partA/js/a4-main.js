var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)
window.onload=function loadTableWithFilter(){
    var tableData=document.querySelector("#main-table-body");
        tableData.innerHTML="";
   // var display="";
/*for(var i=0; i<petData.length;i++){
if((filterType=="dog" && petData[i].type=="dog")||
(filterType=="cat" && petData[i].type=="cat")||
(filterType=="bird" && petData[i].type=="bird")||
filterType==""){*/
   /* if (petData[i].age>=filterAgeMin && petData[i].age<= filterAgeMax){*/  
        var row = document.createElement("tr");   
        var td1 = document.createElement("td");
        var img = document.createElement("img");       
        /*img.setAttribute("src",petData[i].image.src);
        img.setAttribute("alt",petData[i].image.alt);
        img.setAttribute("width",petData[i].image.width);
        img.setAttribute("height",petData[i].image.height);*/
        img.setAttribute("src",petData[1].image.src);
        img.setAttribute("alt",petData[1].image.alt);
        img.setAttribute("width",petData[1].image.width);
        img.setAttribute("height",petData[1].image.height);
        td1.appendChild(img);  
        row.appendChild(td1);     
        var td2 = document.createElement("td");      
        var header4=document.createElement("h4");        
        var name = document.createTextNode(petData[1].name)
        header4.appendChild(name);
        
        
        var para=document.createElement("p");
        //var span=document.createElement("span");
        
        para.innerHTML = petData[1].description;
        //var text=document.createTextNode(petData[i].description);
        //text.appendChild(nodespan);
        //nodespan.appendChild(petData[i].name);*/
        var span= document.createElement("span");
        var age = document.createTextNode("Age: "+ petData[1].age+ " years old.");
        //var agetext = document.createElement
        span.appendChild(age);
        td2.appendChild(header4);
        td2.appendChild(para);
        td2.appendChild(span)
        row.appendChild(td2);
        //row.appendChild()*/
        tableData.appendChild(row);
    }
  //}
//}
//}

/*window.onload=function(){
    loadTableWithFilter();
}*/
/*function filterDog(){
    filterType ="dog";
    loadTableWithFilter();
}*/
/*function filterCat(){
    filterType ="cat";
    loadTableWithFilter();
}
function filterBird(){
    filterType ="bird";
    loadTableWithFilter();
}*/
function filterAllPets(){
    //filterType ="";
    //filterAgeMin=0;
   // filterAgeMax=Number.MAX_VALUE;
    loadTableWithFilter();
    
}
/*function filter_1_3(){
    filterType ="";
    filterAgeMin=1;
    filterAgeMax=3;
    loadTableWithFilter();
}
function filter_4_plus(){
    filterType ="";
    filterAgeMin=4;
    filterAgeMax=Number.MAX_VALUE;
    loadTableWithFilter();
}
function filter_zero_1(){
    filterType ="";
    filterAgeMin=0;
    filterAgeMax=1;
    loadTableWithFilter();
}
*/
//tableData.innerHTML=display;