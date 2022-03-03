var var1;
var r = 1;
var x = document.getElementById("StartMenu");
function startupprograms() {
	//document.getElementById('startupsound').play();
	if (r == 1) {
	document.getElementById("startupsound").play();
}
}

function startmenu() {
  
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}