$(document).ready(function(){
	var d = new Date();
	var n = d.getDate();
	n = n + 2;
	if (n % 12 == 0) {
		document.body.className = "twelve";
	} else if (n % 12 == 1) {
		document.body.className = "one";
	} else if (n % 12 == 2) {
		document.body.className = "two";
	} else if (n % 12 == 3) {
		document.body.className = "three";
	} else if (n % 12 == 4) {
		document.body.className = "four";
	} else if (n % 12 == 5) {
		document.body.className = "five";
	} else if (n % 12 == 6) {
		document.body.className = "six";
	} else if (n % 12 == 7) {
		document.body.className = "seven";
	} else if (n % 12 == 8) {
		document.body.className = "eight";
	} else if (n % 12 == 9) {
		document.body.className = "nine";
	} else if (n % 12 == 10) {
				document.body.className = "ten";
	} else if (n % 12 == 11) {
				document.body.className = "eleven";
	}
});