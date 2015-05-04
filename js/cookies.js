
	// var CookieUtil = {
		// get: function(name){
			// var cookieName = encodeURIComponent(name) + "=",
				// cookieStart = document.cookie.indexOf(cookieName),
				// cookieValue = null, cookieEnd;
				
				// if(cookieStart > -1){
					// cookieEnd = document.cookie.indexOf(";", cookieStart);
					// if(cookieEnd == -1){
						// cookieEnd = document.cookie.length;
					// }
					
					// cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
				// }
				
				// return cookieValue;
		// },
		
		// set: function(name, value, expires, path, domain, secure){
			// var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
			
			// if(expires instanceof Date){
				// cookieText += "; expires=" + expires.toGMTString();
			// }
			
			// if(path){
				// cookieText += "; path=" + path;
			// }
			
			// if(domain){
				// cookieText += "; domain=" + domain;
			// }
			
			// if(secure){
				// cookieText += "; secure";
			// }
			// document.cookie = cookieText;
		// },
		
		// delete: function(name, path, domain, secure){
			// this.set(name, "", new Date(0), path, domain, secure);
		// }
	// }

	var showAllCokies = function(){
		var cookies = split(document.cookie, ";");
		
		for(var i=0; i < cookies.lenght; i++){ 
			console.log(cookies[i]);
			document.getElementById("allCookies").innerHTML += "<p>" + cookies[i] +"</p>" ;
		}
		
	}
	
	var addNewCookie = function(){
		var newName = document.getElementById("cookieName").value,
			newValue = document.getElementById("cookieValue").value,
			allCookies = document.getElementById("allCookies");
			
		document.cookie = encodeURIComponent(newName) + "=" + encodeURIComponent(newValue)
		
		allCookies.innerHTML = document.cookie;
		
		document.getElementById("cookieName").value  = "";
		document.getElementById("cookieValue").value  = "";
	}
	
	var deleteCookie = function(){
		var newName = document.getElementById("deleteCookieName").value,
			oldDate = new Date(0),
			cookieText = encodeURIComponent(newName) + "=" + encodeURIComponent("") + "; expires=" +oldDate.toGMTString();
			allCookies = document.getElementById("allCookies"); 
		
		document.cookie = cookieText;
		
		allCookies.innerHTML = document.cookie;
		document.getElementById("deleteCookieName").value  = "";
	}
