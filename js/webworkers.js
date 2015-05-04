

function startFibonacci(){
	var worker = new Worker('js/fibonacci.js');
	
	worker.postMessage('start');
	
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
	var idb;
	
	//create WebSQL database				
	var db = openDatabase('mydb', '1.0', 'demo db', 4*1024*1024);
	
	//create a Table
	db.transaction( function(tx){
		tx.executeSql('CREATE TABLE demo (id, text)');
	});
	
	
	// send data to the web worker to be encrypted
	worker.postMessage({
		action: 'encrypt',
		data: data,
		key: encryptKey
	});
	
	worker.onmessage = function (event) {					
		//save the encrypted data to localStorage					
		localStorage.setItem('newItem', event.data);
		
		//save the encrypted data to WebSQl	
		db.transaction(function(tx){
			var id = guid();
			tx.executeSql('INSERT INTO demo values(?,?)', [id, event.data]);
		});
		
		//event.data
		document.getElementById('encryptedText').value = event.data
	};
}

function decryptData(){

	var worker = new Worker('js/crypto.js');
	
	// get data to be decrypted
	var data = document.getElementById('encryptedText').value;
	var decryptKey = document.getElementById('encryptKey').value;				
	
	worker.postMessage({
		action: 'decrypt',
		data: data,
		key: decryptKey
	});
	
	worker.onmessage = function (event) {
		
		document.getElementById('decryptText').value = event.data;
		
	};
}

function guid() {
	return _p8(false) + _p8(true) + _p8(true) + _p8(false);
}

function _p8(s) {
	var p = (Math.random().toString(16) + "000000000").substr(2, 8);
	return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
}