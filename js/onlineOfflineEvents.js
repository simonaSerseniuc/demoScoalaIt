(function(){		
	var displayStatus = document.getElementById("status"),
		onOnline = function () {
			console.log('online');
			displayStatus.innerHTML = "Online";
			displayStatus.className = "online";
		},
					
		onOffline = function () {
			console.log('offline');
			displayStatus.innerHTML = "Offline";
			displayStatus.className = "offline";
		};
		
	if (window.addEventListener) {
		window.addEventListener("online", onOnline);
		window.addEventListener("offline", onOffline);
	} else {
		document.body.ononline = onOnline;
		document.body.onoffline = onOffline;
	}
})();				