/************  ANSWERS TO QUESTION 5 A ************/
var suit;
var rank;
var id;

var suitName = ["Hearts", "Diamonds", "Spades", "Clubs"];
var rankName = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
//////////  5.1 ////////////////

function findRank(id) {
	rank = Math.floor(id/4) + 1;
	return rank;
}

//////////  5.2////////////////

function findSuit(id) { // --> 1..4
	findID(suit, rank);
	suitLabel = suitName[id%4];
	return suitLabel;
}

//////////  5.3 ////////////////

function findColor(id) {
	if (id%4 < 2) {
		color = "Red";
	} 
	else {
		color = "Black";
	}
	return color;
}

//////////  5.4 ////////////////

function findName(id) { // -->"red","black"
	cardName = rankName[Math.floor(id/4)];
	nameOfCard= (cardName + " of " + findSuit(id));
	return nameOfCard;
}

//////////  5.5 ////////////////

function findID(suit, rank) {
id= (4 * (rank-1)) + suit;
return id;
}


/************  ANSWERS TO QUESTION 5 B ************/


/************  ANSWERS TO QUESTION 5 C ************/




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
