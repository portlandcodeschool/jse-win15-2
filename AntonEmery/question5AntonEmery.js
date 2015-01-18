/* 5
a) Write five related functions to compute different aspects of a card:

rank(id) returns 1-13, representing the card's rank (for an id between 0-51).

suit(id) returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).

color(id) returns "red" or "black". name(id) returns the full name of the card (e.g. "Four of Diamonds").

cardID(rank,suit) returns 0-51, identifying the card id of a given rank and suit.
*/

var cardRank = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 
			  'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

var cardSuit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];


function rank(id) {
	var rankNumber = Math.round((id + 1) / 4); 
	return rankNumber;
	}

function suit(id) {
	var suitNumber = id % 4;
	return suitNumber; 
}

function color(color) {  
	var cardColor = suit(color);
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

function cardID(cardRank, cardSuit) {                   
	var cardNumber = (4 * cardRank) + cardSuit; //4 is number of columns
	return cardNumber;
	}


