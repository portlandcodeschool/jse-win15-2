//Jan 12 status: this is totally untested, unfit and just a bunch of guessing at answers
### Homework #2


Due Monday, 1/19

Each problem below lists an estimate of its relative difficulty and how much time it requires as a percentage of the whole set.  The total time estimate for this homework set is around 10-15 hours.

Please also read the [learning objectives](objectives.md) for this week.

---

**1)** _(Easy, 10% of total time)_

Revisit your solution to homework #1, problem 5, which expresses an improper fraction as a proper one, and turn your solution into a function.

**a)** Write a function `fractionString(n,d)` which takes 2 parameters (n,d) and returns a string.  For example, 
`fractionString(7,4)` should return "1 3/4", and `fractionString(3,3)` should (for now) return "1 0/3".  As before, assume that _n_ and _d_ are both positive integers.

Note that _returning_ a string is not the same as _printing_ a string.  You may use `console.log()` for debugging, but your function should have the correct string as its return value.
You can also print your return value with an expression like `console.log(fractionString(7,4))`.


var n =3;
var d = 2;

var fractionString = function(n,d) {
  var wholeNumber = 0;
  var numerator = 0;
  var properFraction = "";

  wholeNumber = Math.trunc( n / d );
  numerator = n % d;

  properFraction = wholeNumber + " " + numerator + "/" + d;

  return properFraction;

}

var properFractionString = fractionString(n,d);
console.log(properFractionString);

**b)** Write a second version of your function which improves the output in two special cases:

- A output string like "0 1/2" should be simplified to just "1/2";
- A output string like "1 0/3" should be simplified to just "1".

var n =3;
var d = 2;

var fractionString2 = function(n,d) {
  var wholeNumber = 0;
  var numerator = 0;
  var properFraction = "";

  wholeNumber = Math.trunc( n / d );
  numerator = n % d;

  // general case format with non-zero values
  properFraction = wholeNumber + " " + numerator + "/" + d;
  
  // handle special case formats for zero whole numbers
  if (wholeNumber === 0) {
    properFraction = numerator + "/" + d;
  }
  // handle special case formats for zero numerators
  if (numerator === 0) {
    properFraction = wholeNumber;
  }

  return properFraction;

}

var properFractionString = fractionString2(n,d);
console.log(properFractionString);




**2)** _(Moderate, 15%)_

Rewrite each block below as the simplest equivalent you can discover.  Your
equivalent should produce the same final conditions as the original code given
the same initial conditions. In each case, if there is an undeclared variable,
assume it has been declared earlier and set to an unknown value.

**a)**

```
var i;
if ((n - Math.floor(n)) >= .5) {
   i = Math.ceil(n);
} else {
  i = Math.floor(n);
}

// this would be shorter but not simpler (if length is simplicity, then stop now)
i = (n - Math.floor(n)) >= .5) ? Math.ceil(n) : Math.floor(n) );
// However, since this appears to be a rounding exercise.
i = Math.trunc(n + .5);  // would be a simpler and shorter way to round n and store the rounded value in i


**b)**
```
var y, xIsFalse = (x? false : true);
if (xIsFalse)
   y = false;
else
   y = x;

// simplified form
var y = (x ? true : false);



**c)**
```
for (var count = 15 - i ; count < 15 ; count=count+1) {
    i = i-1;  
    console.log(i+1)
}

// this code counts down from i to 1, printing counter each time.
for (var count = i; count > 0; count--)
{
  console.log(count);
}


**d)**
```
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

// this should work for strings and valid numbers ( NaN breaks it)
x = !a + !b;


//---

//**3)** _(Moderate, 20%)_

//Write a function which returns a string containing the entire lyrics for the song "The Twelve Days of Christmas".  Make sure that your result is grammatically and typographically correct (include line breaks, commas, etc. where needed), but keep redundancy within your program to a minimum.  Don't just `console.log()` each line; return them together as a single string which includes a '\n' at each line break.
//You may want to use helper functions, loops, and/or arrays to store repeated elements.


// basic looping works
//TODO fix the song it is messed up.  starts at first day with 1 gift, needs to be 12 with 12 then count down (and get the words right.)
// TODO storage could also be refactored to a smaller string storage built up with concatenation

var singTwelveDays function(){
  var twelveGiftsList = [ "a Partridge in a Pear Tree"
                    , "Two Turtle Doves"
                    , "Three French Hens"
                    , "Four Calling Birds"
                    , "Five Gold Rings"
                    , "Six Geese a-Laying"
                    , "Seven Swans a-Swimming"
                    , "Eight Maids a-Milking"
                    , "Nine Ladies Dancing"
                    , "Ten Lords a-Leaping"
                    , "Eleven Pipers Piping"
                    , "Twelve Drummers Drumming" ];

    var twelveDaysList = [ "On the first day of Christmas, my true love gave to me, "
                    ,"On the second day of Christmas, my true love gave to me, "
                    ,"On the third day of Christmas, my true love gave to me, "
                    ,"On the fourth day of Christmas, my true love gave to me, "
                    ,"On the fift day of Christmas, my true love gave to me, "
                    ,"On the sixth day of Christmas, my true love gave to me, "
                    ,"On the seventh day of Christmas, my true love gave to me, "
                    ,"On the eigth day of Christmas, my true love gave to me, "
                    ,"On the ninth day of Christmas, my true love gave to me, "
                    ,"On the tenth day of Christmas, my true love gave to me, "
                    ,"On the eleventh day of Christmas, my true love gave to me, "
                    ,"On the twelve day of Christmas, my true love gave to me, "];


   //  loop through the 12 Days, singing each the new thing (index) and down (index to 0) the lists
   for (i = 0; i < twelveDaysList.length; i++) { // counting up the days list
      console.log(twelveDaysList[i])
      for (j = i; j >= 0; j--)  // counting up the gift list to the current day index
        {
          if ( i > 0 && j ===0 ){
            console.log("and " + twelveGiftsList[j] )
          }
          else{
            console.log(twelveGiftsList[j] )
          }
          
        }
   }


}

// Lyrics for the song: reference: http://en.wikipedia.org/wiki/The_Twelve_Days_of_Christmas_%28song%29
On the First day of Christmas my true love sent to me
a Partridge in a Pear Tree.

On the Second day of Christmas my true love sent to me
Two Turtle Doves
and a Partridge in a Pear Tree.

On the Third day of Christmas my true love sent to me
Three French Hens,[3]
Two Turtle Doves
and a Partridge in a Pear Tree.

Subsequent verses follow the same pattern, each adding one new gift and repeating all the earlier gifts, so that each verse is one line longer than its predecessor:
a Partridge in a Pear Tree.
Two Turtle Doves
Three French Hens
Four Calling Birds
Five Gold Rings
Six Geese a-Laying
Seven Swans a-Swimming
Eight Maids a-Milking
Nine Ladies Dancing
Ten Lords a-Leaping
Eleven Pipers Piping
Twelve Drummers Drumming







If you prefer a non-Christmas option, you may choose a different song with similarly repeating structure, such as "There was an Old Woman Who Swallowed a Fly".  If you prefer a vegan option, you may write your own cruelty-free song.

---

// **4) _(Difficult, 20%)_

// Suppose the '&' key on your keyboard is missing, and you want to be able to
// continue programming without it.  You decide to simulate the && operator with a
// function!



// **a)** Write a function `and2(a,b)` which tries to simulate the && operator: it
// should always return the same result as `(a && b)` for any values of _a_ and
// _b_.  (For example, `and2((0>1),true)` should return _false_.)  But you can't
// use && itself within your function!

var and2 function(a,b){
  return a*b; 
}




// **b) Write another function `and3(a,b,c)` which tries to simulate a double-&&
// **operator: it should always return the same result as `(a && b && c)` for any
// **values of a,b,c.  (For example, `and3((1>0),(0>1),true)` should return
// **_false_.)  As before, you're not allowed to use && itself. Remember that you
// **can call functions from functions!

var and3 function(a,b,c){
  return a*b*c;
}



// **c)** Now generalize your function to handle any number of values.  You will
// learn better ways eventually, but for now use an array to store all the values.
// Your new function `andN(values)` should accept one parameter _values_, which is
// an array holding all the values to && together. If the argument you provide when
// calling the function holds values [a,b,c...z], as in `andN(26,[a,b,c...z])`, the
// function should return the same result as `(a && b && c && ... z)`. Make sure to
// handle two special cases: length 0 (then return _true_) and length 1 (then
// return that single value). Again, don't use &&.

var andN function (n arr[]){
  var retVal = arr[0];
  for (i=1; i<arr.length; i++){
    retVal = retVal * arr[i]
  }
  return retVal;
}




// **d)** You've just realized that your effort was doomed: neither of your
// functions can replace the && operator in certain circumstances.  Explain why,
// and find an example which demonstrates failure.

NaN or strings?


**5) _(Moderate, 35%)_

// Imagine that a deck of playing cards is sorted by rank and suit: first all the
// Aces, then the Twos, etc, with the Kings last.  Within each rank, the suits are
// in the order Hearts, Diamonds, Spades, Clubs.  Number each card in order from 0
// to 51 (i.e. 0=Ace of Hearts; 1=Ace of Diamonds; 51=King of Clubs), and let that
// ID number represent the corresponding card.  Use this encoding scheme for each
// part below.

//var deckOfCards = Aces[Heart,Diamond,Spade,Club], Twos[Heart,Diamond,Spade,Club]... Kings[....];

rank = (id%13)+1;
suit = Math.trunc(id/13)+1;



// **a) Write five related functions to compute different aspects of a card:

// * `rank(id)` returns 1-13, representing the card's rank (for an _id_ between
// * `0-51).

// * `suit(id)` returns 1-4, representing the card's suit (1 is Hearts, 4 is
// * `Clubs).

// * `color(id)` returns "red" or "black".

TODO // ************* just like the squares on the checkerboard using MOD DIV

// * `name(id)` returns the full name of the card (e.g. "Four of Diamonds").

TODO // just like the days of Christmas lookup, but could be done with array lookups and MOD DIV


// * `cardID(rank,suit)` returns 0-51, identifying the card id of a given rank and
// * `suit.

TODO // like the week 1 return from n for row column.


// Assume each function is given valid arguments (i.e. the args are integers in the
// appropriate range). Your functions may call each other-- for example: _color_
// could be derived from _suit_. Try to reuse functions to avoid duplicating code.

// **Hint #1: Notice the patterns as the card id ranges from 0 to 51:

// - rank(id) increases slowly, like a quotient; suit(id) cycles quickly through
// - 1-4, (almost) like a remainder; color(id) alternates _R,R,B,B,R,R,B,B..._

// Where have you seen that kind of pattern before?

// **Hint #2: Generate your card names by combining a rank word from one array and
// **suit word from another.

TODO -- write the code into this file
// Write your code into the [template file](cards-template1a.js).  The template
// also includes a suite of assertions for testing your code.  When you evaluate
// the entire template file, the assertions at the end will write messages to the
// console if your functions fail any test.  Make sure you pass all the tests!

// **b)** Now abandon the assumption of valid arguments and program defensively!
// Rewrite your five functions so that each returns the correct answer when all
// arguments are valid, but returns NaN if any argument is not an integer in the
// appropriate range.

TODO - load the file // You may use the provided [template file](cards-template1b.js), which has extra
// tests checking the results of invalid arguments.

// **Hint #3: you can test whether an number _n_ is an integer with `(n%1 === 0)`.

// **c)** In the file with your solution to part **b**, extend the existing test
// suite: write 3 new assertions to test success cases and 3 more assertions to
// test failure cases.


// _(Please note: Problem 5 is the most important one in this homework, because
// variations of it will recur in several later homeworks.  The cleaner your code
// is now, the easier it will be to modify later.)_


