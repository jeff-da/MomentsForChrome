$(document).ready(function(){
	var d = new Date();
	var n = d.getDate();
	if (n % 10 == 0) {
		document.body.className = "ten";
	} else if (n % 10 == 1) {
		document.body.className = "one";
	} else if (n % 10 == 2) {
		document.body.className = "two";
	} else if (n % 10 == 3) {
		document.body.className = "three";
	} else if (n % 10 == 4) {
		document.body.className = "four";
	} else if (n % 10 == 5) {
		document.body.className = "five";
	} else if (n % 10 == 6) {
		document.bod0.className = "six";
	} else if (n % 10== 7) {
		document.body.className = "seven";
	} else if (n % 10 == 8) {
		document.body.className = "eight";
	} else if (n % 10 == 9) {
		document.body.className = "nine";
	}
});