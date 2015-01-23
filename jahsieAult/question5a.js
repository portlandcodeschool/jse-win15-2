/************  ANSWERS TO QUESTION 5 A ************/

var suitName = [1, 2, 3, 4];
var suitTitle= ["Hearts", "Diamonds", "Spades", "Clubs"]
var rankName = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
//////////  5.1 ////////////////

function rank(id) {
	cardRank = Math.floor(id/4) + 1;
	return cardRank;
}

//////////  5.2////////////////

function suit(id) { // --> 1..4
	cardID(suit, rank);
	suitLabel = suitName[id%4];
	return suitLabel;
}

//////////  5.3 ////////////////

function color(id) {
	if (id%4 < 2) {
		cardColor = "red";
	} 
	else {
		cardColor = "black";
	}
	return cardColor;
}

//////////  5.4 ////////////////

function name(id) { // -->"red","black"
	cardName = suitTitle[id%4];
	nameOfCard= (rankName[rank(id)-1] + " of " + cardName);
	return nameOfCard;
}

//////////  5.5 ////////////////

function cardID(rank, suit) {
id= (rank * 4) - (5 - suit);
return id;
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
