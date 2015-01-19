// Simple version (no error-detection)

// function()--> possible return values
var cardName = [
	'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King' 
];

var suitName = [
	'Hearts', 'Diamonds', 'Spades', 'Clubs'
];

function rank(card) { // --> 1..13
    var cardRank = Math.ceil(card/4);
    if ((card % 4) == 0) {
    	cardRank++;
    }
    return cardRank;
}

function suit(card) { // --> 1..4
	return (card % 4) + 1;
}

function cardID(rank,suit) { // --> 0..51
    return ((rank * 4) - 5) + suit;
}

function color(card) { // -->"red","black"
	var cardColor;
	if ((suit(card) == 1) || (suit(card) == 2)) {
		cardColor = "red";	
	} else if ((suit(card) == 3) || (suit(card) == 4)){
		cardColor = "black";
	};

	return cardColor;
}

function name(card) { // --> string
	return cardName[(rank(card) - 1)] + ' of ' + suitName[(suit(card) - 1)];
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

