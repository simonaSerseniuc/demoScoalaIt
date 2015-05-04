var addNewLocal = function(){
	var newLocalItem = document.getElementById("newLocalName").value,
		newLocalValue = document.getElementById("newLocalValue").value;
		
	localStorage.setItem(newLocalItem, newLocalValue);
	console.log(localStorage.getItem(newLocalItem));
	
	document.getElementById("newLocalName").value  = "";	
	document.getElementById("newLocalValue").value  = "";	
	
	showLocal();
}

var showLocal = function(){
	var allLocal = document.getElementById("allLocal"),
		items = "";
		
	for(var i =0; i< localStorage.length; i++){
		items += "<p><b>" + localStorage.key(i) + "</b> : " + localStorage[localStorage.key(i)] + "</p>";
	}
	
	allLocal.innerHTML = items;
}

var deleteLocal = function(){
	var deleteLocalName = document.getElementById("deleteLocalName").value;
	
	localStorage.removeItem(deleteLocalName);
	
	showLocal();
	
	document.getElementById("deleteLocalName").value  = "";
}

//Session Storage

var addNewSessions = function(){
	var newLocalItem = document.getElementById("newSessionName").value,
		newLocalValue = document.getElementById("newSessionValue").value;
		
	sessionStorage.setItem(newLocalItem, newLocalValue);
	console.log(sessionStorage.getItem(newLocalItem));
	
	document.getElementById("newSessionName").value  = "";	
	document.getElementById("newSessionValue").value  = "";	
	
	showSessions();
}

var showSessions = function(){
	var allLocal = document.getElementById("allSession"),
		items = "";
		
	for(var i =0; i< sessionStorage.length; i++){
		items += "<p><b>" + sessionStorage.key(i) + "</b> : " + sessionStorage[sessionStorage.key(i)] + "</p>";
	}
	
	allLocal.innerHTML = items;
}

var deleteSessions = function(){
	var deleteSessionName = document.getElementById("deleteSessionName").value;
	
	sessionStorage.removeItem(deleteSessionName);
	
	showSessions();
	
	document.getElementById("deleteSessionName").value  = "";
}