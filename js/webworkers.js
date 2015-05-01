function startFibonacci(){
	var worker = new Worker('js/fibonacci.js');
	
	//To be added
	
	worker.onmessage = function (event) {
		var div = document.getElementById('dataFibonacci');
		div.innerHTML = div.innerHTML + event.data + '\n';
		
		var objDiv = document.getElementById("dataFibonacci");
		objDiv.scrollTop = objDiv.scrollHeight;
	};
	
	worker.onerror = function(error) {
		dump("Worker error: " + error.message + "\n");
		throw error;
	};
}

function encryptData(){
	
	var worker = new Worker('js/crypto.js');
	var data = document.getElementById('encryptText').value;
	var encryptKey = document.getElementById('encryptKey').value;
	
	// send data to the web worker to be encrypted
	//To be added
	
	
	worker.onmessage = function (event) {					
		//save the encrypted data to localStorage					
		localStorage.setItem('newItem', event.data);

		//event.data
		document.getElementById('encryptedText').value = event.data
	};
}

function decryptData(){

	var worker = new Worker('js/crypto.js');
	
	// get data to be decrypted
	var data = document.getElementById('encryptedText').value;
	var decryptKey = document.getElementById('encryptKey').value;				
	
	// send data to the web worker to be decrypted
	//To be added
	
	worker.onmessage = function (event) {
		document.getElementById('decryptText').value = event.data;
	};
}