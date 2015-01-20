
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
	console.log(i);
}

//d
var x;
if (a) {
   if (b) {
     x = 0;
   } else {
     x = 1;
   }
} else {
  if (b) {
    x = 1;
  } else {
    x = 2;
  }
}

//simplified as:
x =  2 if a || b 
x = 0 if a && b
x = 1 if b || a


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
    //var currentIndex = myArr.indexOf(current);
    //return i > -1 ? myArr.slice(0, i) : [];
    if (current < myArr.length +1 ){
    	
    	return myArr.slice(0, current).reverse();
    }
}



function twelveDays(){
	var daysOfXmas = ["a partridge in a pear tree", "two turtle doves", "three French hens", " four calling birds", "five golden rings", "six geese a-laying", "seven swans a-swimming", "eight maids a-milking", "nine ladies dancing", "ten lords a-leaping", "eleven drummers drumming", "twelve pipers piping"];

	for (var i = 1, length = daysOfXmas.length; i <= length; i++){
        		var currentVerse = getAllPrevious(i, daysOfXmas);
				var refrain = "On the " + numberSuffix(i) + " day of Christmas,\n my true love sent to me\n" + 
				" " + currentVerse.join(", \n");
						
		console.log(refrain);
		
	}

}


getAllPrevious(12, daysOfXmas).join(", \n");// correct input for 12th day


//4
//a
function and2(a,b){
	if (a == false){
		return false;
	}
	if (b == false){
		return false;
	}
	else {
		return true;
	}
}

//b
function and3(a,b,c){
	if (a == false){
		return false;
	}
	if (b == false){
		return false;
	}
	if ( c == false){
		return false;
	}
	else {
		return true;
	}
}

// function isFalse(element, index, array){
// 	// use Array.prototype.some method to test whether any elements in array are false -- return false if
// 	return element == false;
// }
//c
function andN(values){
	//var arrayOfValues == [values];
	for (var i = 0, length = values.length; i < length; i++){
		if (values[i] == false) {
			return false;
		}
	}
}

andN.([0 < 3, 3 < 7, 5 > 6, poop])

0 < 3 && 3 < 7 && 5 < 6]

0 < 3 && 3 < 7 && 5 > 6 && poop

//d 
//the function evaluates every element in the array parameter,  while the && operator short-circuits -- doesn't evaluate anything after an element is evaluated false


//5

false && true 
true || false 


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
	if ( id > 51 || id < 0 || typeof id === 'string' || id % 1 !== 0 || id === undefined) {
		return NaN;
	}
	return Math.floor(id/SUITES.length) + 1; //return RANKS index number
}

function suit(id) {
	//suit(id) returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).
	//return SUITES[id % SUITES.length]// return suit name
	if ( id > 51 || id < 0 || typeof id === 'boolean' || id % 1 !== 0 || id === undefined) {
		return NaN;
	}
	return id % SUITES.length + 1; // returns suit index number
}

function color(id) {
	//color(id) returns "red" or "black"
	//hearts red, diamonds red,
	if (typeof id === 'string' || id === true){
		return NaN;
	}
	var color = suit(id);
	if (color > 1) {
		return "black";
	} else {
		return "red";
	}

}

function name(id) {
	if ( id > 51 || id < 0 || typeof id === 'string' || id == false || id % 1 !== 0 || id === undefined) {
		return NaN;
	}
	return CARDS[id];
	//return RANKS[rank(id)] + " of " + SUITES[suit(id)]; 
}

function cardID(rank, suit) {
	//returns 0-51, identifying the card id of a given rank and suit.
	if (rank > 13 || rank < 1 || typeof rank == 'string' || typeof rank === 'boolean'|| rank % 1 !== 0){
		return NaN;
	} 
	if (suit > 4 || suit % 1 !== 0) {
		return NaN;
	}
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

//b
// create filters within the functions in 'a' which return NaN if input is wrongrange or type.

// Extra testing!
// These tests check that invalid arguments produce invalid output.
// I.e. "garbage in guarantees garbage out".
assert(Number.isNaN(rank(52)), "Test 21 failed");
assert(Number.isNaN(rank("0")), "Test 22 failed");
assert(Number.isNaN(rank(-1)), "Test 23 failed");
assert(Number.isNaN(rank(2.5)), "Test 24 failed");
assert(Number.isNaN(rank(undefined)),"Test 25 failed");

assert(Number.isNaN(suit(52)), "Test 26 failed");
assert(Number.isNaN(suit(false)),"Test 27 failed");
assert(Number.isNaN(suit(true)), "Test 28 failed");
assert(Number.isNaN(suit(-1)), "Test 29 failed");
assert(Number.isNaN(suit(3.14)), "Test 30 failed");

assert(Number.isNaN(cardID(0,1)), "Test 31 failed");
assert(Number.isNaN(cardID("1",1)), "Test 32 failed");
assert(Number.isNaN(cardID(1,5)), "Test 33 failed");
assert(Number.isNaN(cardID(14,1)), "Test 34 failed");
assert(Number.isNaN(cardID(-1,-1)), "Test 35 failed");
assert(Number.isNaN(cardID(0.5,1)), "Test 36 failed");
assert(Number.isNaN(cardID(1,NaN)), "Test 37 failed");

assert(Number.isNaN(color('apple')),"Test 41 failed");
assert(Number.isNaN(color(true)), "Test 42 failed");

assert(Number.isNaN(name(false)), "Test 43 failed");
assert(Number.isNaN(name(-1)), "Test 44 failed");
assert(Number.isNaN(name(52)), "Test 45 failed");
assert(Number.isNaN(name(NaN)), "Test 46 failed");