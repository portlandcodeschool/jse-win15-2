
//1)
//a) Write a function fractionString(n,d) which takes 2 parameters (n,d) and returns a string. For example, fractionString(7,4) should return "1 3/4", and fractionString(3,3) should (for now) return "1 0/3". As before, assume that n and d are both positive integers.

function fractionString(n, d) {
	var wholeNumber = Math.floor(n /d);
	if (n % d == 0) {
		var fraction = "0" + "/" + d;
	} else {
		fraction = (n % d) + "/" + d;
	}
	return wholeNumber + " " + fraction;
}

//b) Write a second version of your function which improves the output in two special cases:

function fractionString(n, d) {
	var wholeNumber = Math.floor(n /d) || "";
	if (n % d == 0) {
		var fraction = "";
	} else {
		fraction = (n % d) + "/" + d;
	}
	return wholeNumber + " " + fraction;
}



//2
//a
var i;
if ((n - Math.floor(n)) >= .5) {
   i = Math.ceil(n);
} else {
  i = Math.floor(n);
}

//simplified as:
i = Math.round(n);

//b
var y, xIsFalse = (x ? false : true); //!x
if (xIsFalse)
   y = false;
else
   y = x;

//simplified as:
if (typeof x != "string") {
	y = true;
} else { 
	y = x;
}

y = (typeof x == "string") || false;

if (typeof x == "string")

function qTwo(){
	var testCases = ["string", "1", true, false, Infinity, 20, undefined, NaN];
	for (var x = 0, length = testCases.length; x < length; x++) {
				var y, xIsFalse = (x ? false : true)
		if (xIsFalse){
					y = false;
				}else{
							y = x;}
		console.log("When x is " + testCases[x] + ", y" + " is " + y);
	};
}
qTwo();




//c
for (var count = 15 - i ; count < 15 ; count=count+1) {
    i = i-1;
    console.log(i+1)
}

//simplified as:
for (var count = 15 - i; count < 15; count++){
	i--;
	console.log(i+1)
}


//4


function numberSuffix(number){
	var lastDigit = parseInt(number.toString().slice(-1));
	if(number > 10 && number < 20) {
		return number + "th";
	}
	switch (lastDigit) {
		case 1:
		return number + "st";
		case 2:
		return number + "nd";
		case 3:
		return number + "rd";
		default:
		return number + "th";
	}
}

function twelveDays(){
	var daysOfXmas = ["a partridge in a pear tree", "turtle doves", "French hens", "calling birds", "golden rings", "geese a-laying", "swans a-swimming", "maids a-milking", "ladies dancing", "lords a-leaping", "drummers drumming", "pipers piping"];

	for (var i = 1, length = daysOfXmas.length; i <= length; i++){

		var refrain = "On the " + numberSuffix(i) + " day of Christmas,\n my true love sent to me\n";
		refrain += i + " " + daysOfXmas[i-1];

		console.log(refrain);
		
	}

}


function twelveDays(){
	var daysOfXmas = ["a partridge in a pear tree", "turtle doves", "French hens", "calling birds", "golden rings", "geese a-laying", "swans a-swimming", "maids a-milking", "ladies dancing", "lords a-leaping", "drummers drumming", "pipers piping"];

	for (var i = 1, length = daysOfXmas.length; i <= length; i++){
		for (var j = i;j >= 1 ; j--){
			var refrain = "On the " + numberSuffix(i) + " day of Christmas,\n my true love sent to me\n";

			refrain += i + " " + daysOfXmas[j];

		}

		
		console.log(refrain);
		
	}

}

/* One for loop for increasing day (the i day of christmas), another loop to print each daysOfXmas entry as well as all previous */