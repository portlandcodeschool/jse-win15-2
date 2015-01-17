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
	var rank = Math.floor(id / 4);  
	return rank;
	}

function suit(id) {
	var suit = id % 4;
	return suit; 
}

function color(id) {
	var cardColor;
	if (suit(id) >= 0 && suit(id) <= 1) {
		cardColor == 'red';
	} else if (suit(id) >= 2 && suit(id) <= 3) {
		cardColor == 'red';
	}
	return cardColor;
}


