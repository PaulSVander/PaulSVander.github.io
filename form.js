document.addEventListener('DOMContentLoaded', bindButton);

function bindButton(){
	document.getElementById('submit').addEventListener('click', function(event){ 

		var req = new XMLHttpRequest();
		var gambit = document.getElementById('gambit').value;
		var years = document.getElementById('years').value;
		req.open("GET", 'https://httpbin.org/?gambit=' + gambit + '&years=' + years, true);
		req.send(null);
		event.preventDefault();
	})
}