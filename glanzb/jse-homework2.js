/*
 * Ez a JavaScript Scratchpad.
 *
 * Írjon be JavaScript kódot, majd válasszon a Végrehajtás vagy a helyi menüből:
 * 1. Futtatás: a kijelölt szöveg (Ctrl+R) kiértékelése,
 * 2. Vizsgálat: az eredmény (Ctrl+I) megnézése az Objektumvizsgálóban, vagy
 * 3. Megjelenítés: az eredmény beszúrása megjegyzésben a kijelölés után. (Ctrl+L)
 */
Homework #2

Due Monday, 1/19

Each problem below lists an estimate of its relative difficulty and how much time it requires as a percentage of the whole set. The total time estimate for this homework set is around 10-15 hours.

Please also read the learning objectives for this week.

1) (Easy, 10% of total time)

Revisit your solution to homework #1, problem 5, which expresses an improper fraction as a proper one, and turn your solution into a function.

a) Write a function fractionString(n,d) which takes 2 parameters (n,d) and returns a string. For example, fractionString(7,4) should return "1 3/4", and fractionString(3,3) should (for now) return "1 0/3". As before, assume that n and d are both positive integers.

Note that returning a string is not the same as printing a string. You may use console.log() for debugging, but your function should have the correct string as its return value. You can also print your return value with an expression like console.log(fractionString(7,4)).


function fractionString(n,d) {
  var fract = n % d;
  var wholes = Math.floor(n/d);
  var result = wholes + ' ' + fract + '/' + d;
  return result;
};


b) Write a second version of your function which improves the output in two special cases:

A output string like "0 1/2" should be simplified to just "1/2";
A output string like "1 0/3" should be simplified to just "1".

function fractionString(n,d) {
  var fract = n % d;
  var wholes = Math.floor(n/d);
  if (wholes === 0) {
    var result = fract + '/' + d;
    } else if (fract === 0) {
    var result = wholes
    } else {
     var result = wholes + ' ' + fract + '/' + d;
    };
    return result;
};


2) (Moderate, 15%)

Rewrite each block below as the simplest equivalent you can discover. Your equivalent should produce the same final conditions as the original code given the same initial conditions. In each case, if there is an undeclared variable, assume it has been declared earlier and set to an unknown value.

a)

var i;
if ((n - Math.floor(n)) >= .5) {
   i = Math.ceil(n);
} else {
  i = Math.floor(n);
}

->
  
var i = Math.round(n)
or
var i;
(n-Math.floor(n))>= .5 ? i i = Math.ceil(n) : i = Math.floor(n);

b)

var y, xIsFalse = (x? false : true);  
if (xIsFalse)
   y = false;
else
   y = x;
->
  var y = (x ? x : false)


c)

for (var count = 15 - i ; count < 15 ; count=count+1) {
    i = i-1;
    console.log(i+1)
}


->

while (i>0) {
      console.log(i--);
}


//Dan's solutions: ??

for ( ; i>0; i--) {
    console.log(i);
}
OR

while (i>0) {
      console.log(i);
      i--;
}
OR

while (i>0) {
      console.log(i--);
}




d) 

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

->
var x;
if (a && b) {
  x=0;
} else if (a || b) {
  x=1;
} else {
  x=2;
}


3) (Moderate, 20%)

Write a function which returns a string containing the entire lyrics for the song "The Twelve Days of Christmas". Make sure that your result is grammatically and typographically correct (include line breaks, commas, etc. where needed), but keep redundancy within your program to a minimum. Don't just console.log() each line; return them together as a single string which includes a '\n' at each line break. You may want to use helper functions, loops, and/or arrays to store repeated elements.

If you prefer a non-Christmas option, you may choose a different song with similarly repeating structure, such as "There was an Old Woman Who Swallowed a Fly". If you prefer a vegan option, you may write your own cruelty-free song.


Subsequent verses follow the same pattern, each adding one new gift and repeating all the earlier gifts, so that each verse is one line longer than its predecessor:

// based on hw classroom help

var days = ["First ", "Second ", "Third ", "Fourth ", "fifth ", "sixth ",
   "seventh ", "eighth ", "ninth ", "tenth ", "eleventh ", "twelfth "];

var presents = ["a Partridge in a Pear Tree.", "Two Turtle Doves and", "Three French Hens, ", "Four Calling Birds, ", "Five Gold Rings, ", "Six Geese a-Laying, ", "Seven Swans a-Swimming, ", "Eight Maids a-Milking, ", "Nine Ladies Dancing, ", "Ten Lords a-Leaping, ", "Eleven Pipers Piping, ", "Twelve Drummers Drumming, "];


for (var day = 0 ; day <12; ++day){ 
  var str = '';
  for (var lines = day ; lines >= 0; lines-- ){ 
   str = str  + presents[lines] + '\n';
  } 
  console.log("On the " + days[day] + "day of Christmas my true love sent to me" + '\n' + str);
}
  



4) (Difficult, 20%)

Suppose the '&' key on your keyboard is missing, and you want to be able to continue programming without it. You decide to simulate the && operator with a function!

a) Write a function and2(a,b) which tries to simulate the && operator: it should always return the same result as (a && b) for any values of a and b. (For example, and2((0>1),true) should return false.) But you can't use && itself within your function!

function and2(a,b) {
  function isTrueb(b) {
      if (b == true) {
       return true;
       } else {
       return false;
       }
    };
   if (a == true) {
       if (isTrueb(b) == true){
         return true;
       } else {
         return false;
       }
   } else {
      return false
    }
  };


b) Write another function and3(a,b,c) which tries to simulate a double-&& operator: it should always return the same result as (a && b && c) for any values of a,b,c. (For example, and3((1>0),(0>1),true) should return false.) As before, you're not allowed to use && itself. Remember that you can call functions from functions!

function and3(a,b,c) {
  function isTruec(c) {
      if (c == true) {
       return true;
       } else {
       return false;
       }
    };
  function isTrueb(b) {
      if (b == true) {
       return true;
       } else {
       return false;
       }
    };
   if (a == true) {
       if (isTrueb(b) == false){
         return true;
       } else {
         return false;
       }
   } else {
      return false
    }
  };





var abc = [a, b, c]
function and3(a,b,c) {
  
  function isTrue(abc) {
      if (abc[0] == false) {
       return false;
       } else if (abc[1] == false){
          return false;
       } else if (abc[2] == false){ 
        return false;
       } else {
         return true;
       }
    };
};
  



c) Now generalize your function to handle any number of values. You will learn better ways eventually, but for now use an array to store all the values. Your new function andN(values) should accept one parameter values, which is an array holding all the values to && together. If the argument you provide when calling the function holds values [a,b,c...z], as in andN(26,[a,b,c...z]), the function should return the same result as (a && b && c && ... z). Make sure to handle two special cases: length 0 (then return true) and length 1 (then return that single value). Again, don't use &&.



d) You've just realized that your effort was doomed: neither of your functions can replace the && operator in certain circumstances. Explain why, and find an example which demonstrates failure.

5) (Moderate, 35%)

Imagine that a deck of playing cards is sorted by rank and suit: first all the Aces, then the Twos, etc, with the Kings last. Within each rank, the suits are in the order Hearts, Diamonds, Spades, Clubs. Number each card in order from 0 to 51 (i.e. 0=Ace of Hearts; 1=Ace of Diamonds; 51=King of Clubs), and let that ID number represent the corresponding card. Use this encoding scheme for each part below.

a) Write five related functions to compute different aspects of a card:

rank(id) returns 1-13, representing the card's rank (for an id between 0-51).

suit(id) returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).

color(id) returns "red" or "black".

name(id) returns the full name of the card (e.g. "Four of Diamonds").

cardID(rank,suit) returns 0-51, identifying the card id of a given rank and suit.

Assume each function is given valid arguments (i.e. the args are integers in the appropriate range). Your functions may call each other-- for example: color could be derived from suit. Try to reuse functions to avoid duplicating code.

Hint #1: Notice the patterns as the card id ranges from 0 to 51:

rank(id) increases slowly, like a quotient;
suit(id) cycles quickly through 1-4, (almost) like a remainder;
color(id) alternates R,R,B,B,R,R,B,B...
Where have you seen that kind of pattern before?

Hint #2: Generate your card names by combining a rank word from one array and suit word from another.

Write your code into the template file. The template also includes a suite of assertions for testing your code. When you evaluate the entire template file, the assertions at the end will write messages to the console if your functions fail any test. Make sure you pass all the tests!

b) Now abandon the assumption of valid arguments and program defensively! Rewrite your five functions so that each returns the correct answer when all arguments are valid, but returns NaN if any argument is not an integer in the appropriate range.

You may use the provided template file, which has extra tests checking the results of invalid arguments.

Hint #3: you can test whether an number n is an integer with (n%1 === 0).

c) In the file with your solution to part b, extend the existing test suite: write 3 new assertions to test success cases and 3 more assertions to test failure cases.

function rank(id) {
  var result = Math.floor(id/4)+1; 
  return result;
}

or 
function rank(id) {
  return = Math.floor(id/4)+1;
}



function suit(id) {
  var result = (id%4) + 1;
  return result;
}

function cardID(rank,suit) {
  return (rank-1)*4 + (suit-1);
}


function color(id) { 
  if (suit(id) == 1 || suit(id) ==2){
    return "red"
  } else {
    return "black"
  }  
}


// Dan's solution
function color(card) { // -->"red,"black"
    return (suit(card) < 3)? "red": "black";
}

var suitNames = ["", "Hearts", "Diamonds", "Spades", "Clubs"];
var rankNames = ["", "Ace", "Two", "Three", "Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
// "" padding the array, because we started with zero

function name(id) { 
  // r is what comes out of the rank function if we put in the id
  var r = rank(id);
  var rankName = rankNames[r];
  // s comes out of suit function when we put in the id
  var s = suit(id);
  var suitName = suitnames[s];
  var fullName = rankName + " of " suitName;
  return fullName;
}


function name(id) { 
  var rankName = rankNames[rank(id)],
      suitName = suitnames[suit(id)],
      fullName = rankName + " of " suitName;
  return fullName;
}

//compact
function name(id) {      
  return rankNames[rank(id)] + " of " suitnames[suit(id)];
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

                
                
                / Extra testing!
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