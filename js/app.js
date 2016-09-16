//Cri
window.addEventListener("load", function() {
	var boton = document.getElementById("btn-cri");

});




//SuperCri
window.addEventListener("load", function() {
	var boton = document.getElementById("btn-supercri");
	boton.addEventListener("click", function() {
		var color = document.getElementById("color").value;

		if (color == "green") {
			document.getElementById("orange").classList.add("border-green");
			document.getElementById("green").classList.remove("border-purple");
			document.getElementById("purple").classList.remove("border-orange");
		} else if (color == "purple") {
			document.getElementById("green").classList.add("border-purple");
			document.getElementById("purple").classList.remove("border-orange");
			document.getElementById("orange").classList.remove("border-green");
		} else if (color == "orange") {
			document.getElementById("purple").classList.add("border-orange");
			document.getElementById("orange").classList.remove("border-green");
			document.getElementById("green").classList.remove("border-purple");
		}
	});
});