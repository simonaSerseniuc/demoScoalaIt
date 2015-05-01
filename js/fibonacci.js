self.onmessage = function(event) {
    var interval;
	if (event.data == "start"){
		self.postMessage("Started!");
		var i;
		var fib = []; //Initialize array!

		fib[0] = 0;
		fib[1] = 1;
		
		for(i=2; i<=1000; i++)
		{
			fib[i] = fib[i-2] + fib[i-1];
		}
        
        interval = setInterval(msg, 2000);
	} else{
		self.postMessage("Terminated!");       
        clearInterval(interval);
	}
    
    var k = 0;
    function msg(){
        
        if(k!=1000){
            self.postMessage(k + " -> " + fib[k] );
            k ++;
        }
    }
    
    
    
};