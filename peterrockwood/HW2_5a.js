// Simple version (no error-detection)

// function()--> possible return values

function rank(card) {
	return Math.ceil((card+1)/4);
}

function suit(card) { 
	return (card%4) + 1;
}

function cardID(rank,suit) { 
	return ((rank - 1) * 4) + (suit-1);
}

function color(card) { 
	if(suit(card) <= 2) {
		return 'red';
	} else {
		return 'black';
	}
}

function name(card) { // --> string
	var cardRank = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
	var cardSuit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
	var rankName = cardRank[rank(card) -1];
	var suitName = cardSuit[suit(card) -1];

	return rankName + ' of ' + suitName;

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

