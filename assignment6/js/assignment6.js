/******************************
 *NAME: KHAI BINH NGUY
 *ID: 126463165
 *DATE: 08/07/2017
 *****************************/
// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1
window.onload=function(){
//	alert("1");
	makeRequest(1);
}



function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	//
	// "https://reqres.in/api/users?page=1" // for page 1
	// "https://reqres.in/api/users?page=2" // for page 2
	// etc...
	var url;
//	alert("2");
	if(pageNum == 1)
		url = "https://reqres.in/api/users?page=1";
	else if(pageNum == 2)
		url = "https://reqres.in/api/users?page=2";
	else if(pageNum == 3)
		url = "https://reqres.in/api/users?page=3";
	else
		url = "https://reqres.in/api/users?page=4";




	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			var tbody=document.getElementById("data");
			tbody.innerHTML="";
		//	alert("?");
			for(var i=0;i<jsData.data.length;i++){
				var row=document.createElement("tr");
				var td1=document.createElement("td");
				var id=document.createTextNode(jsData.data[i].id);
				td1.appendChild(id);
				row.appendChild(td1);
			//	alert("!");
				var td2=document.createElement("td");
				var fname=document.createTextNode(jsData.data[i].first_name);
				td2.appendChild(fname);
				row.appendChild(td2);
				var td3=document.createElement("td");
				var lname=document.createTextNode(jsData.data[i].last_name);
				td3.appendChild(lname);
				row.appendChild(td3);
				var td4 = document.createElement("td");
				var img = document.createElement("img");
				img.setAttribute("src", jsData.data[i].avatar);
				img.setAttribute("alt", jsData.data[i].first_name);
				td4.appendChild(img);
				row.appendChild(td4);
				tbody.appendChild(row);
			//	alert("$");
			}




			
			// TODO: remove the class "active" from all elements with the class "pgbtn"
			
			
			
			
			
			
			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...
			
			for(var i=1;i<=jsData.total_page;i++){
				var pNum="pgbtn"+i;
				var page=document.getElementById(pNum);
		//		alert("5");
				if(k==jsData.page)
					page.className="active";
				else
					page.classList.remove("active");
		//			alert("6");
			}
		} else {
			console.log('There was a problem with the request.');
		}
	}
}	