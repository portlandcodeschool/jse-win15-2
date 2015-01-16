// Simple version (no error-detection)

// function()--> possible return values

function rank(id) { // --> 1..13
	var r = id / 4;
	return Math.ceil(r);
}

function suit(id) { // --> 1..4
	var s = (id%4)+1;
	return s
}

function cardID(rank,suit) { // --> 0..51
	var cid = ((rank * 4) - 5)  + suit;
	return cid;
}

function color(id) { // -->"red","black"
	var colorCheck = suit(id);
		if (colorCheck == 1 || colorCheck == 2){
		alert(colorCheck);
		return "red";
	} else if (colorCheck == 3 ||  colorCheck == 4){
		return "black";
	};
}

function name(id) { // --> string
	var suitARR = [" Hearts", " Diamonds", " Spades", " Clubs"];
	var rankARR = ["One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ",
	"Eight ", "Nine ", "Ten ", "Jack ", "Queen ", "King "];
	var rid = rank(id);
	var sid = suit(id);
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