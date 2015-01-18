// Simple version (no error-detection)

// function()--> possible return values

var cardRank = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 
			  'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

var cardSuit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];


function rank(id) {  //return 1-13
	var rankNumber = Math.ceil((id + 1) / 4); 
	return rankNumber;
	}

function suit(id) { // --> 1..4
	var suitNumber = (id % 4) + 1;
	return suitNumber; 
}

function cardID(cardRank, cardSuit) {     //0...51             
	var cardNumber = (4 * (cardRank - 1)) + (cardSuit - 1); //4 is number of columns
	return cardNumber;
	}

function color(cardID) {   // red or black
	var cardColor = suit(cardID);
	if (cardColor >= 0 && cardColor <= 1) {
		cardColor = 'red';
	} else if (cardColor >= 2 && cardColor <= 3) {
		cardColor = 'black';
	}
	return cardColor;
}

function name(id) {
	var cardName = rank(id);
	var cSuit = suit(id);
	console.log(cardRank[cardName] + ' of ' + cardSuit[cSuit]);
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

