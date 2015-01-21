// PART 1 OF 2, for January 19 JSE Homework. /*Due Monday, 1/19
/*
Each problem below lists an estimate of its relative difficulty and how much
time it requires as a percentage of the whole set.  The total time estimate for
this homework set is around 10-15 hours.

Please also read the [learning objectives](objectives.md) for this week.



**1) _(Easy, 10% of total time)_

Revisit your solution to homework #1, problem 5, which expresses an improper
fraction as a proper one, and turn your solution into a function.

**a)** Write a function `fractionString(n,d)` which takes 2 parameters (n,d) and
returns a string.  For example,  `fractionString(7,4)` should return "1 3/4",
and `fractionString(3,3)` should (for now) return "1 0/3".  As before, assume
that _n_ and _d_ are both positive integers.

Note that _returning_ a string is not the same as _printing_ a string.  You may
use `console.log()` for debugging, but your function should have the correct
string as its return value. You can also print your return value with an
expression like `console.log(fractionString(7,4))`. 
*/

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

/*
**b)** Write a second version of your function which improves the output in two special cases:

- A output string like "0 1/2" should be simplified to just "1/2";
- A output string like "1 0/3" should be simplified to just "1".
*/ 

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

// **************** Testing
var n = 3;
var d = 2;
var properFractionString = fractionString2(n,d);
console.log(properFractionString);

n = 0;
d = 6;
var properFractionString = fractionString2(n,d);
console.log(properFractionString);

n = 4;
d = 2;
var properFractionString = fractionString2(n,d);
console.log(properFractionString);

//divide by zero... 
n = 3;
d = 0;
var properFractionString = fractionString2(n,d);
console.log(properFractionString);



/*
**2)** _(Moderate, 15%)_

Rewrite each block below as the simplest equivalent you can discover.  Your
equivalent should produce the same final conditions as the original code given
the same initial conditions. In each case, if there is an undeclared variable,
assume it has been declared earlier and set to an unknown value.

//**2a)**
*/

var i;
if ((n - Math.floor(n)) >= .5) {
   i = Math.ceil(n);
} else {
  i = Math.floor(n);
}

// **************************  simplified form 2a)
i = Math.trunc(n + .5);  // would be a simpler and shorter way to round n and store the rounded value in i


//**2b)**

var y, xIsFalse = (x? false : true);
if (xIsFalse)
   y = false;
else
   y = x;

// **************************  simplified form 2b)
var y = (x ? true : false);



//**2c)**

for (var count = 15 - i ; count < 15 ; count=count+1) {
    i = i-1;  
    console.log(i+1)
}

// **************************  simplified form 2c)
// this code counts down from i to 1, printing counter each time.
for (var count = i; count > 0; count--)
{
  console.log(count);
}


//**2d)**

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


// **************************  simplified form 2b)
// this should work for strings and valid numbers ( NaN breaks it)
x = !a + !b;

// ********************* problem 3)  Partridge Family Christmas song 
/* 
Write a function which returns a string containing the entire lyrics for the song "The
Twelve Days of Christmas".  Make sure that your result is grammatically and
typographically correct (include line breaks, commas, etc. where needed), but
keep redundancy within your program to a minimum.  Don't just `console.log()`
each line; return them together as a single string which includes a '\n' at each
line break. You may want to use helper functions, loops, and/or arrays to store
repeated elements. 
*/


var singTwelveDays = function(){
  var twelveGiftsList = [ "a Partridge in a Pear Tree"
                    , "Two Turtle Doves"
                    , "Three French Hens"
                    , "Four Calling Birds"
                    , "Five Golden Rings"
                    , "Six Geese a-Laying"
                    , "Seven Swans a-Swimming"
                    , "Eight Maids a-MilEight"
                    , "Nine Ladies Dancing"
                    , "Ten Lords a-Leaping"
                    , "Eleven Pipers Piping"
                    , "Twelve Drummers Drumming" ];

    var twelveDaysList = [ "On the first day of Christmas, my true love gave to me, "
                    ,"On the second day of Christmas, my true love gave to me, "
                    ,"On the third day of Christmas, my true love gave to me, "
                    ,"On the fourth day of Christmas, my true love gave to me, "
                    ,"On the fifth day of Christmas, my true love gave to me, "
                    ,"On the sixth day of Christmas, my true love gave to me, "
                    ,"On the seventh day of Christmas, my true love gave to me, "
                    ,"On the eighth day of Christmas, my true love gave to me, "
                    ,"On the ninth day of Christmas, my true love gave to me, "
                    ,"On the tenth day of Christmas, my true love gave to me, "
                    ,"On the eleventh day of Christmas, my true love gave to me, "
                    ,"On the twelfth day of Christmas, my true love gave to me, "];

// TODO - improvements would be to use looping arrays to reduce the static storage of repeated strings.
// "my true love gave to me" etc. could be concatenated, etc.

   //  loop through the 12 Days, singing each the new thing (index) and down (index to 0) the lists
   var songString = [""];
   for ( var i = 0; i < twelveDaysList.length; i++) 
    { // counting up the days list
      songString += twelveDaysList[i] + "\n";
      for (var j = i; j >= 0; j--)  // counting up the gift list to the current day index
        {
          if ( i > 0 && j ===0 )
          {
            songString += ("and " + twelveGiftsList[j] + "\n" );
          } 
          else
          {
            songString += (twelveGiftsList[j] + "\n" );
          }
      }
   }
   console.log(songString);
}

singTwelveDays();


/*
Lyrics for the song: reference: http://en.wikipedia.org/wiki/The_Twelve_Days_of_Christmas_%28song%29
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
Eight Maids a-MilEight
Nine Ladies Dancing
Ten Lords a-Leaping
Eleven Pipers Piping
Twelve Drummers Drumming
*/


// If you prefer a non-Christmas option, you may choose a different song with similarly repeating structure, such as "There was an Old Woman Who Swallowed a Fly".  If you prefer a vegan option, you may write your own cruelty-free song.

// ---

// **4) _(Difficult, 20%)_

// Suppose the '&' key on your keyboard is missing, and you want to be able to
// continue programming without it.  You decide to simulate the && operator with a
// function!



// **a)** Write a function `and2(a,b)` which tries to simulate the && operator: it
// should always return the same result as `(a && b)` for any values of _a_ and
// _b_.  (For example, `and2((0>1),true)` should return _false_.)  But you can't
// use && itself within your function!

var and2 = function(a,b){
  return (a*b ? true : false); 
};


// **b) Write another function `and3(a,b,c)` which tries to simulate a double-&&
// **operator: it should always return the same result as `(a && b && c)` for any
// **values of a,b,c.  (For example, `and3((1>0),(0>1),true)` should return
// **_false_.)  As before, you're not allowed to use && itself. Remember that you
// **can call functions from functions!

var and3 = function(a,b,c){
  return ( a*b*c ? true : false);
};


// **c)** Now generalize your function to handle any number of values.  You will
// learn better ways eventually, but for now use an array to store all the values.
// Your new function `andN(values)` should accept one parameter _values_, which is
// an array holding all the values to && together. If the argument you provide when
// calling the function holds values [a,b,c...z], as in `andN(26,[a,b,c...z])`, the
// function should return the same result as `(a && b && c && ... z)`. Make sure to
// handle two special cases: length 0 (then return _true_) and length 1 (then
// return that single value). Again, don't use &&.

var andN = function(n, arr) {
  
  var retVal = false; // holds the return value
  
  if (arr[0] === null){
    retVal = true;
  }

  retVal = and2(arr[0], arr[0]); // works for length 1
  
  for (i=1; i<arr.length; i++){
    retVal = and2(retVal, arr[i]);
  }
  return (retVal ? true : false );  // && operator should return a boolean (and2 can return a number on certain args)
};

// testing section
var testArray = [0,1,2,3,4,5,6,7,8,9];
var returnedVal = andN(testArray.length, testArray)
console.log("returned ", returnedVal);
console.log("from this array: ", testArray);
// returns false

var testArray = [99,1,2,3,4,5,6,7,8,9];
var returnedVal = andN(testArray.length, testArray)
console.log("returned ", returnedVal);
console.log("from this array: ", testArray);
//returns true

var testArray = [99,1,2,3,4,5,6,7,8,Infinity];
var returnedVal = andN(testArray.length, testArray)
console.log("returned ", returnedVal);
console.log("from this array: ", testArray);
//returns true

var testArray = [2,1,2,3,4,5,6,7,8,NaN];
var returnedVal = andN(testArray.length, testArray)
console.log("returned ", returnedVal);
console.log("from this array: ", testArray);
//returns false

// **d)** You've just realized that your effort was doomed: neither of your
// functions can replace the && operator in certain circumstances.  Explain why,
// and find an example which demonstrates failure.

NaN or strings?

**5) _(Moderate, 35%)_
// For problem 5 see Homework2GregBorchers-cards-template1a.js 
