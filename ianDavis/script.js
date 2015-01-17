
//1)
//a) Write a function fractionString(n,d) which takes 2 parameters (n,d) and returns a string. For example, fractionString(7,4) should return "1 3/4", and fractionString(3,3) should (for now) return "1 0/3". As before, assume that n and d are both positive integers.

function fractionString(n, d) {
	var wholeNumber = Math.floor(n /d);
	if (n % d == 0) {
		var fraction = "0" + "/" + d;
	} else {
		fraction = (n % d) + "/" + d;
	}
	return wholeNumber + " " + fraction;
}

//b) Write a second version of your function which improves the output in two special cases:

function fractionString(n, d) {
	var wholeNumber = Math.floor(n /d) || "";
	if (n % d == 0) {
		var fraction = "";
	} else {
		fraction = (n % d) + "/" + d;
	}
	return wholeNumber + " " + fraction;
}



//2
//a
var i;
if ((n - Math.floor(n)) >= .5) {
   i = Math.ceil(n);
} else {
  i = Math.floor(n);
}

//simplified as:
i = Math.round(n);

//b
var y, xIsFalse = (x ? false : true); //!x
if (xIsFalse)
   y = false;
else
   y = x;

//simplified as:
if (typeof x != "string") {
	y = true;
} else { 
	y = x;
}

y = (typeof x == "string") || false;

if (typeof x == "string")

function qTwo(){
	var testCases = ["string", "1", true, false, Infinity, 20, undefined, NaN];
	for (var x = 0, length = testCases.length; x < length; x++) {
				var y, xIsFalse = (x ? false : true)
		if (xIsFalse){
					y = false;
				}else{
							y = x;}
		console.log("When x is " + testCases[x] + ", y" + " is " + y);
	};
}
qTwo();




//c
for (var count = 15 - i ; count < 15 ; count=count+1) {
    i = i-1;
    console.log(i+1)
}

//simplified as:
for (var count = 15 - i; count < 15; count++){
	i--;
	console.log(i+1)
}


//3


function numberSuffix(number){
	var lastDigit = parseInt(number.toString().slice(-1));
	if(number > 10 && number < 20) {
		return number + "th";
	}
	switch (lastDigit) {
		case 1:
		return number + "st";
		case 2:
		return number + "nd";
		case 3:
		return number + "rd";
		default:
		return number + "th";
	}
}

function getAllPrevious(current, myArr) {
    var currentIndex = myArr.indexOf(current);
    //return i > -1 ? myArr.slice(0, i) : [];
    if (current < myArr.length +1 ){
    	return myArr.slice(0, current).reverse();
    }
}



function twelveDays(){
	var daysOfXmas = ["1 partridge in a pear tree", "turtle doves", "French hens", "calling birds", "golden rings", "geese a-laying", "swans a-swimming", "maids a-milking", "ladies dancing", "lords a-leaping", "drummers drumming", "pipers piping"];

	for (var i = 1, length = daysOfXmas.length; i <= length; i++){
        //for (var j = i -1; j > 1; j--){
				var currentVerse = getAllPrevious(i, daysOfXmas);
				var refrain = "On the " + numberSuffix(i) + " day of Christmas,\n my true love sent to me\n" + 
						i + " " + daysOfXmas[i-1] + " " + currentVerse.join(", \n");
						//console.log(j);
	//}
		console.log(refrain);
		
	}

}

getAllPrevious(12, daysOfXmas).join(", \n");// correct input for 12th day


//currently outputs the following for day 12:
// "On the 12th day of Christmas,
//  my true love sent to me
// 12 pipers piping pipers piping, 
// drummers drumming, 
// lords a-leaping, 
// ladies dancing, 
// maids a-milking, 
// swans a-swimming, 
// geese a-laying, 
// golden rings, 
// calling birds, 
// French hens, 
// turtle doves, 
// 1 partridge in a pear tree"









//5


var RANKS = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
var SUITES = ["Hearts", "Diamonds", "Spades", "Clubs"];

function createCardDeck(){
	var cardDeck = [];
		
	for (var i = 0, rankLength = RANKS.length; i < rankLength; i++) {
		for (var j = 0, suitLength = SUITES.length; j < suitLength; j++){
				cardDeck.push(RANKS[i] + " of " + SUITES[j]);
			}
	}
	return cardDeck;

}

var CARDS = createCardDeck();

function rank(id) {
	//rank(id) returns 1-13, representing the card's rank (for an id between 0-51).
	//return RANKS[Math.floor(id/SUITES.length)]; this returns rank name 
	return Math.floor(id/SUITES.length) + 1; //return RANKS index number
}

function suit(id) {
	//suit(id) returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).
	//return SUITES[id % SUITES.length]// return suit name
	return id % SUITES.length + 1; // returns suit index number
}

function color(id) {
	//color(id) returns "red" or "black"
	//hearts red, diamonds red,
	var color = suit(id);
	if (color > 1) {
		return "black";
	} else {
		return "red";
	}

}

function name(id) {
	return CARDS[id];
	//return RANKS[rank(id)] + " of " + SUITES[suit(id)]; 
}

function cardID(rank, suit) {
	//returns 0-51, identifying the card id of a given rank and suit.
	var rankString = RANKS[rank-1], suitString = SUITES[suit-1];
	return SUITES.length * RANKS.indexOf(rankString) + SUITES.indexOf(suitString);
	//return SUITES.length * RANKS.indexOf(rank) + SUITES.indexOf(suit);**works**
	//return SUITES.length * rank + suit;
	//return Math.floor(rank/SUITES.length) + " " + (suit % SUITES.length + 1);
	}


// TESTING:
function assert(claim,message) {
if (!claim) console.error(message);
}
assert(rank(0)===1, "Test 1 failed");
assert(rank(3)===1, "Test 2 failed");
assert(rank(51)===13,"Test 3 failed");
assert(suit(0)===1, "Test 4 failed");
assert(suit(5)===2, "Test 5 failed");
assert(suit(51)===4, "Test 6 failed");
assert(cardID(1,1)===0, "Test 7 failed");
assert(cardID(13,4)===51, "Test 8 failed");
assert(cardID(8,3)===30, "Test 9 failed");
assert(color(0)==='red', "Test 10 failed");
assert(color(2)==='black', "Test 11 failed");
assert(name(5)==='Two of Diamonds', "Test 12 failed");
assert(name(51)==='King of Clubs', "Test 13 failed");
