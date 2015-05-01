(function(){		
	var displayStatus = document.getElementById("status"),
		onOnline = function () {
			console.log('online');
			displayStatus.innerHTML = "Online";
			displayStatus.className = "";
		},
					
		onOffline = function () {
			console.log('offline');
			displayStatus.innerHTML = "Offline";
			displayStatus.className = "";
		};
		
	if (window.addEventListener) {
	} else {
		//if IE
	}
})();				