//Cri
window.addEventListener("load", function() {
	var boton = document.getElementById("btn-cri");
	var contador = 1;
	
	boton.addEventListener("click", function() {
		if(contador == 1) {
			document.getElementById("color").value = "red";
			document.getElementById("orange").classList.add("border-green");
			document.getElementById("green").classList.remove("border-orange");
		}
		if(contador == 2) {
			document.getElementById("color").value = "orange";
			document.getElementById("green").classList.add("border-purple");
			document.getElementById("purple").classList.remove("border-green");
		}
		if(contador == 3) {
			document.getElementById("color").value = "green";
			document.getElementById("purple").classList.add("border-orange");
			document.getElementById("orange").classList.remove("border-purple");
			contador = 0;
		}
		contador++;
	});	

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