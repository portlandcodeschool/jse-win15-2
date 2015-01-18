// Error-detecting version

function isInt(n) { return ((n%1 === 0) && (typeof n === 'number')); }
function inRange(n,a,z) { return ((n >= a) && (n <= z));}

function rank(card) { //returns 1-13, representing the card's rank (for an id between 0-51).
    if (isInt(card) && (inRange(card,0,51))) {
    	return Math.floor(card / 4) + 1;
    } else {
    	return NaN;
    }
}

function suit(card) { //returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).
    if (isInt(card) && (inRange(card,0,51))) {
    	return (card % 4) + 1;
    } else {
    	return NaN;
    }
}

function cardID(rank,suit) { //returns 0-51, identifying the card id of a given rank and suit.
   	var valid_rank = (isInt(rank) && (inRange(rank,1,13)));
   	var valid_suit = (isInt(suit) && (inRange(suit,1,4)));
   	if (valid_rank && valid_suit) {
    	return ((rank - 1) * 4) + (suit - 1);
	} else {
		return NaN;
	}
}

function color(card) { //"red","black" 
    if (isInt(card) && (inRange(card,0,51))) {
		var b = Math.floor(((card / 2) % 2));
		return b?'black':'red';
    } else {
    	return NaN;
    }
}

function name(card) { //returns the full name of the card (e.g. "Four of Diamonds").
    if (isInt(card) && (inRange(card,0,51))) {
		var suites = ["", "Hearts", "Diamonds", "Spades", "Clubs"];
		var ranks = new Array();
		ranks[1] = "Ace";
		ranks[2] = "Two";
		ranks[3] = "Three";
		ranks[4] = "Four";
		ranks[5] = "Five";
		ranks[6] = "Six";
		ranks[7] = "Seven";
		ranks[8] = "Eight";
		ranks[9] = "Nince";
		ranks[10] = "Ten";
		ranks[11] = "Jack";
		ranks[12] = "Queen";
		ranks[13] = "King";
		return ranks[rank(card)] + ' of ' + suites[suit(card)];
    } else {
    	return NaN;
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

