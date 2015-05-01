importScripts('AES/AES.js');

self.onmessage = function(event) {
    
	if (event.data.action == "encrypt"){
		
		var encryptedData = (GibberishAES.enc(event.data.data, event.data.key)).trim();
        self.postMessage(encryptedData);
		
	} else{
		// decrypt
		var decryptedData = GibberishAES.dec(event.data.data, event.data.key);
		self.postMessage(decryptedData);
	}
};
