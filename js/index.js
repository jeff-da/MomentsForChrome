$(document).ready(function(){
	var d = new Date();
	var n = d.getDate();
	if (n % 11 == 0) {
		document.body.className = "eleven";
	} else if (n % 11 == 1) {
		document.body.className = "one";
	} else if (n % 11 == 2) {
		document.body.className = "two";
	} else if (n % 11 == 3) {
		document.body.className = "three";
	} else if (n % 11 == 4) {
		document.body.className = "four";
	} else if (n % 11 == 5) {
		document.body.className = "five";
	} else if (n % 11 == 6) {
		document.body.className = "six";
	} else if (n % 11 == 7) {
		document.body.className = "seven";
	} else if (n % 11 == 8) {
		document.body.className = "eight";
	} else if (n % 11 == 9) {
		document.body.className = "nine";
	} else {
		document.body.className = "ten";
	}
});