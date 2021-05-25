document.addEventListener('DOMContentLoaded', bindButton);

function bindButton(){
	document.getElementById('moves-button').addEventListener('click', function(event){
		list = document.getElementById("move-list");
		if (list.style.display === "block") {
			list.style.display = "none";
		} else {
			list.style.display = "block"
		}
	})
}
