// Error-detecting version

var suitName = [1, 2, 3, 4];
var suitTitle= ["Hearts", "Diamonds", "Spades", "Clubs"];
var rankName = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];

//////////  5.1 ////////////////

function rank(id) {
	if (!(Number.isInteger(id)) || id > 51 || id < 0) {
		return NaN;
	}
	cardRank = Math.floor(id/4) + 1;
	return cardRank;
}


//////////  5.2////////////////

function suit(id) { // --> 1..4
	if (!(Number.isInteger(id)) || id > 51 || id < 0) {
	return NaN;
	}
	cardID(suit, rank);
	suitLabel = suitName[id%4];
	return suitLabel;
}

//////////  5.3 ////////////////

function color(id) {
	if (!(Number.isInteger(id)) || id > 51 || id < 0) {
	return NaN;
	}
	else if (id%4 < 2) {
		cardColor = "red";
	} 
	else {
		cardColor = "black";
	}
	return cardColor;
}

//////////  5.4 ////////////////

function name(id) { // -->"red","black"
	if (!(Number.isInteger(id)) || id > 51 || id < 0) {
	return NaN;
	}
	cardName = suitTitle[id%4];
	nameOfCard= (rankName[rank(id)-1] + " of " + cardName);
	return nameOfCard;
}

//////////  5.5 ////////////////

function cardID(rank, suit) {
	/*Oops! Just realized there was a flaw in my original function. You can't enter a string of the suit name, just the suit array value. */
	if (suit > 4 || suit < 1 || !(Number.isInteger(suit)))  /*(suit !(Hearts" || "Diamonds" || "Spades" || "Clubs""))*/ {
		return NaN;
	} else if (rank > 13 || rank < 1 || !(Number.isInteger(rank))) {
		return NaN;
	}
	else { 
		id = (rank * 4) - (5 - suit);
		return id;
	}
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

assert(Number.isNaN(cardID(0,1)),   "Test 31 failed");
assert(Number.isNaN(cardID("1",1)), "Test 32 failed");
assert(Number.isNaN(cardID(1,5)),   "Test 33 failed");
assert(Number.isNaN(cardID(14,1)),  "Test 34 failed");
assert(Number.isNaN(cardID(-1,-1)), "Test 35 failed");
assert(Number.isNaN(cardID(0.5,1)), "Test 36 failed");
assert(Number.isNaN(cardID(1,NaN)), "Test 37 failed");

assert(Number.isNaN(color('apple')),"Test 41 failed");
assert(Number.isNaN(color(true)),   "Test 42 failed");
assert(Number.isNaN(name(false)),   "Test 43 failed");
assert(Number.isNaN(name(-1)),      "Test 44 failed");
assert(Number.isNaN(name(52)),      "Test 45 failed");
assert(Number.isNaN(name(NaN)),     "Test 46 failed");
