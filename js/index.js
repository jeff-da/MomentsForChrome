$(document).ready(function(){
	var d = new Date();
	var n = d.getDate();
	n = n + 2;
	if (n % 16 == 0) {
		document.body.className = "sixteen";
	} else if (n % 16 == 1) {
		document.body.className = "one";
	} else if (n % 16 == 2) {
		document.body.className = "two";
	} else if (n % 16 == 3) {
		document.body.className = "three";
	} else if (n % 16 == 4) {
		document.body.className = "four";
	} else if (n % 16 == 5) {
		document.body.className = "five";
	} else if (n % 16 == 6) {
		document.body.className = "six";
	} else if (n % 16 == 7) {
		document.body.className = "seven";
	} else if (n % 16 == 8) {
		document.body.className = "eight";
	} else if (n % 16 == 9) {
		document.body.className = "nine";
	} else if (n % 16 == 10) {
				document.body.className = "ten";
	} else if (n % 16 == 11) {
				document.body.className = "eleven";
	} else if (n % 16 == 12) {
				document.body.className = "twelve";
	} else if (n % 16 == 13) {
				document.body.className = "thirteen";
	} else if (n % 16 == 14) {
				document.body.className = "fourteen";
	} else if (n % 16 == 15) {
				document.body.className = "fifteen";
	}
});
