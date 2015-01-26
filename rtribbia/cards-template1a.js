// Simple version (no error-detection)

// function()--> possible return values

function rank(card) { //returns 1-13, representing the card's rank (for an id between 0-51).
    return Math.floor(card / 4) + 1;
}

function suit(card) { //returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).
    return (card % 4) + 1;
}

function cardID(rank,suit) { //returns 0-51, identifying the card id of a given rank and suit.
    return ((rank - 1) * 4) + (suit - 1);
}

function color(card) { //"red","black" 
	var b = Math.floor(((card / 2) % 2));
	return b?'black':'red';
}

function name(card) { //returns the full name of the card (e.g. "Four of Diamonds").
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

