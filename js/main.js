function bold(){

 document.getElementById("p").classList.toggle("mystyle");
}



function italic() {
     document.getElementById ("p").classList.toggle("italicstyle");

}
function underlined(){
	document.getElementById ("p").classList.toggle("underlinedstyle");

}
function font(){
	var x= document.getElementById("fontfamily").value;
	document.getElementById("p").style.fontFamily=x;
}
function font2(){
	var x= document.getElementById("fontsize").value;
	document.getElementById("p").style.fontSize=x+"px";
}
function font3(){
	var x= document.getElementById("borderstyle").value;
	document.getElementById("p").style.border=x;
}
function font4(){
	var x= document.getElementById("bordercolor").value;
	document.getElementById("p").style.borderColor=x;
}
function font5(){
	var x= document.getElementById("backgroundcolor").value;
	document.getElementById("p").style.backgroundColor=x;
}
function font6(){
	var x= document.getElementById("colo").value;
	document.getElementById("p").style.color=x;
}

