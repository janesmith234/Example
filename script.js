var add = document.getElementById("add");
var list = document.getElementById("list");


add.onclick = function() {
	let newItem = document.getElementById("newItem").value;
	list.innerHTML += "<div class='listItem'><input type='checkbox'>" + newItem + "</div>"; 
	document.getElementById("newItem").value = "";
	return;
}