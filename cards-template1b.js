// Error-detecting version

/*

Some trouble I'm having: I can get the contents of checkValidID to work if
they are all present in the function it is checking, but I cannot
get the helper function to work. I think it has something to do with the
the return command, but I am uncertain how to navigate around it at the
moment.

I also think there's probably a better way to check valid ID's than a bunch
of ugly ||'s, but this is what I've had time for!

*/

var suitARR = [" Hearts", " Diamonds", " Spades", " Clubs"];
var rankARR = ["Ace ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ", "Jack ", "Queen ", "King "];

function checkValidID(id) {
			if (id < 0 || id > 51 || id%1 !== 0) {
		alert("Sorry, your number is out of range. Only whole numbers 0-51, please!)");
		return NaN;
			} else if (typeof id === "string" || typeof id === "boolean"
			 || typeof id === "undefined") {
		alert("Sorry, only whole numbers 0-51, please!");
		return NaN;
	} else {
		return id;
	}
;}

function rank(id) { // --> 1..13
			if (id < 0 || id > 51 || id%1 !== 0) {
		alert("Sorry, your number is out of range. Only whole numbers 0-51, please!)");
		return NaN;
			} else if (typeof id === "string" || typeof id === "boolean"
			 || typeof id === "undefined") {
		alert("Sorry, only whole numbers 0-51, please!");
		return NaN;
	};
	var r = id / 4;
	return Math.floor(r + 1);
};
//}

function suit(id) { // --> 1..4
			if (id < 0 || id > 51 || id%1 !== 0) {
		alert("Sorry, your number is out of range. Only whole numbers 0-51, please!)");
		return NaN;
			} else if (typeof id === "string" || typeof id === "boolean"
			 || typeof id === "undefined") {
		alert("Sorry, only whole numbers 0-51, please!");
		return NaN;
	};
	var s = (id%4)+1;
	return s
}

function cardID(rank,suit) { // --> 0..51
		if (rank <= 0 || rank > 13 || rank%1 !== 0) {
	alert("Sorry, your number is out of range. Only whole numbers 0-13, please!)");
	return NaN;
		} else if (typeof rank === "string" || typeof rank === "boolean"
		|| typeof rank === "undefined") {
	alert("Sorry, only whole numbers 0-13, please!");
	return NaN;
};
		if (suit <= 0 || suit > 4 || suit%1 !== 0) {
	alert("Sorry, your number is out of range. Only whole numbers 0-4, please!)");
	return NaN;
		} else if (typeof suit === "string" || typeof suit === "boolean"
		|| typeof suit === "undefined" || typeof suit === undefined) {
	alert("Sorry, only whole numbers 0-4, please!");
	return NaN;
};
	var cid = ((rank * 4) - 5)  + suit;
	return cid;
}

function color(id) { // -->"red","black"
			if (id < 0 || id > 51 || id%1 !== 0) {
		alert("Sorry, your number is out of range. Only whole numbers 0-51, please!)");
		return NaN;
			} else if (typeof id === "string" || typeof id === "boolean"
			 || typeof id === "undefined") {
		alert("Sorry, only whole numbers 0-51, please!");
		return NaN;
	};
		if (suit(id) == 1 || suit(id) == 2){
		return "red";
	} else if (suit(id) == 3 ||  suit(id) == 4){
		return "black";
	};
}

function name(id) { // --> string
			if (id < 0 || id > 51 || id%1 !== 0) {
		alert("Sorry, your number is out of range. Only whole numbers 0-51, please!)");
		return NaN;
			} else if (typeof id === "string" || typeof id === "boolean"
			 || typeof id === "undefined") {
		alert("Sorry, only whole numbers 0-51, please!");
		return NaN;
	};
	var rid = rank(id) - 1;
	var sid = suit(id) - 1;
	var name = rankARR[rid] + "of" + suitARR[sid];
	return name;
}



// TESTING:
function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(rank(0)===1,  "Test 1 failed");
assert(rank(3)===1,  "Test 2 failed");
assert(rank(51)===13,"Test 3 failed");
assert(suit(0)===1,  "Test 4 failed");
assert(suit(5)===2,  "Test 5 failed");
assert(suit(51)===4, "Test 6 failed");
assert(cardID(1,1)===0,    "Test 7 failed");
assert(cardID(13,4)===51,  "Test 8 failed");
assert(cardID(8,3)===30,   "Test 9 failed");
assert(color(0)==='red',   "Test 10 failed");
assert(color(2)==='black', "Test 11 failed");
assert(name(5)==='Two of Diamonds', "Test 12 failed");
assert(name(51)==='King of Clubs',  "Test 13 failed");


// Extra testing!
// These tests check that invalid arguments produce invalid output.
// I.e. "garbage in guarantees garbage out".
assert(Number.isNaN(rank(52)),  "Test 21 failed");
assert(Number.isNaN(rank("0")), "Test 22 failed");
assert(Number.isNaN(rank(-1)),  "Test 23 failed");
assert(Number.isNaN(rank(2.5)), "Test 24 failed");
assert(Number.isNaN(rank(undefined)),"Test 25 failed");

assert(Number.isNaN(suit(52)),   "Test 26 failed");
assert(Number.isNaN(suit(false)),"Test 27 failed");
assert(Number.isNaN(suit(true)), "Test 28 failed");
assert(Number.isNaN(suit(-1)),   "Test 29 failed");
assert(Number.isNaN(suit(3.14)), "Test 30 failed");
assert(Number.isNaN(suit(x)), "Test 30a failed");

assert(Number.isNaN(cardID(0,1)),   "Test 31 failed");
assert(Number.isNaN(cardID("1",1)), "Test 32 failed");
assert(Number.isNaN(cardID(1,5)),   "Test 33 failed");
assert(Number.isNaN(cardID(14,1)),  "Test 34 failed");
assert(Number.isNaN(cardID(2+2, true)), "Test 34a failed");
assert(Number.isNaN(cardID(-1,-1)), "Test 35 failed");
assert(Number.isNaN(cardID(0.5,1)), "Test 36 failed");
assert(Number.isNaN(cardID(1,NaN)), "Test 37 failed");

assert(Number.isNaN(color('apple')),"Test 41 failed");
assert(Number.isNaN(color("red")), "Test 41a failed");
assert(Number.isNaN(color(true)),   "Test 42 failed");
assert(Number.isNaN(name(false)),   "Test 43 failed");
assert(Number.isNaN(name(-1)),      "Test 44 failed");
assert(Number.isNaN(name(52)),      "Test 45 failed");
assert(Number.isNaN(name(NaN)),     "Test 46 failed");