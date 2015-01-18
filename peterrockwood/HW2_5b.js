// Error-detecting version

//function to test validity of input. Tests for numberness, integerness, 
//and in-rangeness.
function isIntegerInRange(input, rangeMin, rangeMax){
	if(typeof(input) != 'number' || input%1 != 0){
		return false
	} else if(input < rangeMin || input > rangeMax){
  		return false
  	} else {
  		return true
  	}
}

//input card index, test for input validity, output card rank(Ace-King)
function rank(card) {
	if(!isIntegerInRange(card, 0, 51)){
  		return NaN; 
  	} else {
  		return Math.ceil((card+1)/4);
  		
  	}
}
//input card index, test for input validity, output card suit(1-4)
function suit(card) {
	if(!isIntegerInRange(card, 0, 51)) {
		return NaN;
	} else {
  		return (card%4) + 1;
  	}	
}


//input card rank and suit, test for input validity, output card index
function cardID(rank,suit) {
	if(!isIntegerInRange(rank, 1, 13)){
		return NaN
	} else if(!isIntegerInRange(suit, 1, 4)){
		return NaN
	} else {
  		return ((rank - 1) * 4) + (suit-1);
	}
}


//input card index, test for input validity, output card color(red,black)
function color(card) {
	if(!isIntegerInRange(card, 0, 51)) {
		return NaN
	}
	if(suit(card) <= 2) {
		return 'red';
	} else {
		return 'black';
	}
}

//input card index, test for input validity, output string('rank of suit')
function name(card) {
	if(!isIntegerInRange(card, 0, 51)) {
		return NaN;
	}
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

//wrapped assertions in a function to batch test
function testAssertions() {
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

	//my success case assertions
	assert(rank(44) === 12,                         "Test 47 failed");
	assert(cardID(5,1) === 16,                      "Test 48 failed");
	assert(name(cardID(12,1)) === 'Queen of Hearts', "Test 49 failed");
	//my failure case assertions
	assert(Number.isNaN(suit(NaN)),                 "Test 50 failed");
	assert(Number.isNaN(color(100)),				"Test 51 failed");
	assert(Number.isNaN(cardID(1)),					"Test 52 failed");

	console.log('done');
}






