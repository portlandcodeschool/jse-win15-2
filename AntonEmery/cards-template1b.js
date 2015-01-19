// Simple version (no error-detection)

// function()--> possible return values

var cardRank = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 
			  'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

var cardSuit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];


function rank(id) {  //return 1-13
	if (id > 51 || typeof(id) == 'string' || id < 0 || id%1 !== 0 || id == undefined) {
		return NaN;
	} else {
	var rankNumber = Math.ceil((id + 1) / 4); //rank number is one more than array index since arrays start at 0 but ranks starts at 1
	return rankNumber;
		}
	}

function suit(id) { // --> 1..4
	if (id > 51 || typeof(id) == 'boolean' || id < 0 || id%1 !== 0) {
		return NaN;
	} else {
	var suitNumber = (id % 4) + 1; //suit number is one more than array index
	return suitNumber; 
	}
}


function cardID(cardRank, cardSuit) {     //0...51   
	if(cardRank < 1 || typeof(cardRank) == 'string' ||  cardRank > 13 || cardRank % 1 !== 0 ) {
		return NaN; 
	} if (cardSuit > 4 || cardSuit % 1 !== 0 || cardSuit == NaN) {	
		return NaN;
	} else {         
	var cardNumber = (4 * (cardRank - 1)) + (cardSuit - 1); //4 is number of columns
	return cardNumber;
	}
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
	var fullName = (cardRank[cardName - 1] + ' of ' + cardSuit[cSuit - 1]);
	return fullName;
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

