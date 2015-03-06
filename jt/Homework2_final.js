/*
HOMEWORK #2

1) (Easy, 10% of total time)

Revisit your solution to homework #1, problem 5, which expresses an improper fraction as a 
proper one, and turn your solution into a function.

a) Write a function fractionString(n,d) which takes 2 parameters (n,d) and returns a string. 
For example, fractionString(7,4) should return "1 3/4", and fractionString(3,3) should 
(for now) return "1 0/3". As before, assume that n and d are both positive integers.

Note that returning a string is not the same as printing a string. You may use console.log() for
debugging, but your function should have the correct string as its return value. You can also 
print your return value with an expression like console.log(fractionString(7,4)).
*/

//Solution from HOMEWORK1 #5:
/*
var n=7, d=4, whole = n/d, mod = n % d;
d += '';                   //had to look up +='' to convert to string
whole= Math.floor(whole);  //had to look up Math.floor() function to remove fraction
whole += '';  
mod += '';
console.log(whole +' '+ mod+'/'+d);
*/



function fractionString(n,d)
 {
  var remainder = n % d;
  var whole = Math.floor(n/d);
  return (whole + " " + remainder+'/' +d);
ans = console.log(fractionString(n,d));
 }




/*
b) Write a second version of your function which improves the output in two special cases:

    A output string like "0 1/2" should be simplified to just "1/2";
    A output string like "1 0/3" should be simplified to just "1".
*/
function fractionString2(n,d) {
  var remainder = n % d;
  var whole = Math.floor(n/d);
  if (whole == 0) 
     return (remainder+'/' +d);
  else if (remainder == 0)
     return (whole+'');
  else
     return (whole + " " + remainder+'/' +d);
 }



/*
2) (Moderate, 15%)
Rewrite each block below as the simplest equivalent you can discover. Your equivalent should 
produce the same final conditions as the original code given the same initial conditions. 
In each case, if there is an undeclared variable, assume it has been declared earlier and set
to an unknown value.

a)

var i;
if ((n - Math.floor(n)) >= .5) {
   i = Math.ceil(n);
} else {
  i = Math.floor(n);
}
*/

//function rounder(n){
var n=Math.round(n);
//    return n;
//}



/*
b)
var y, xIsFalse = (x? false : true);
if (xIsFalse)
   y = false;
else
   y = x;
*/
var y, x;
y=x;


/*
c)
for (var count = 15 - i ; count < 15 ; count=count+1) {
    i = i-1;
    console.log(i+1)
}
*/
for (var count = 15-i; count<15; count++) {
    console.log(i);
    i--;
}

//or 

for (var i; i<15; i++) {
    console.log(i);
}    


/*
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
*/
var x;
if (a) && (b)
    x=0;
else if (a)||(b)
    x=1;
else
    x=2;

/*
3) (Moderate, 20%)
Write a function which returns a string containing the entire lyrics for the song "The Twelve 
Days of Christmas". Make sure that your result is grammatically and typographically correct 
(include line breaks, commas, etc. where needed), but keep redundancy within your program to
a minimum. Don't just console.log() each line; return them together as a single string which 
includes a '\n' at each line break. You may want to use helper functions, loops, and/or arrays
to store repeated elements.

If you prefer a non-Christmas option, you may choose a different song with similarly repeating
structure, such as "There was an Old Woman Who Swallowed a Fly". If you prefer a vegan option,
you may write your own cruelty-free song.
*/

//add new info to 2nd line
//add 2nd line to front of first line
//print both
//loop
// loop 2nd line getting bigger w/ each round

var firstline = "", newline="";
     arr1 = ["A partridge in a pear tree! \n", "Two turtle doves, \nAnd ", 
             "Three French hens, \n", "Four calling birds, \n",
             "Five golden rings, \n", "Six geese a-laying, \n", "Seven swans a-swimming, \n",
             "Eight maids a-milking, \n", "Nine ladies dancing, \n",  "Ten lords a-leaping, \n",
              "Eleven pipers piping, \n", "Twelve drummers drumming, \n"];

    for(var i= 0; i<arr1.length; i++ ) {
        if (i==0) {
        firstline = arr1[0]; 
        console.log("On the " + (i+1)+"th "+ "day of Chrsitmas my true love gave to me:\n"+ firstline);     
        }
        else {        
        newline = arr1[i];
        firstline =newline+ firstline;
        console.log("On the " + (i+1)+"th "+ "day of Chrsitmas my true love gave to me:\n"+ firstline);        
        }
    }
        
/*
4) (Difficult, 20%)

Suppose the '&' key on your keyboard is missing, and you want to be able to continue 
programming without it. You decide to simulate the && operator with a function!

a) Write a function and2(a,b) which tries to simulate the && operator: it should always 
return the same result as (a && b) for any values of a and b. (For example, and2((0>1),true) 
should return false.) But you can't use && itself within your function!
*/
// evaluate a 
//evaluate b
//compare a with b
//selection of cases for each combination tt, tf, ft, ff


//this id not work because of the else statements (???) - corrected - caps on T/F, ; at end
// no ";" after if blocks

var and2 = function (a,b) {
    if (a==true) {  //if needs '==' for t/f?, but below in case statements can be '='???
        if (b==true) 
          return true;     
    
       else if (b==false) 
            return false;       
    };
    return false;
}


//Dallas' solution - remove the else-s
var and2 = function(a,b){
    if(a==true) {
            if(b==true){
            return true
        }
        return false
    }
    else{
        return false
    }
    }
    
  
/*
b) Write another function and3(a,b,c) which tries to simulate a double-&& operator: it 
should always return the same result as (a && b && c) for any values of a,b,c. (For example, 
and3((1>0),(0>1),true) should return false.) As before, you're not allowed to use && itself. 
Remember that you can call functions from functions!
*/

var and3 = function (a,b,c) {
    if (a==true) {  //if needs '==' for t/f?, but below in case statements can be '='???
        if (b==true) {
            if (c==true)
                return true; 
            return false;
        }
        return false;
    }
    
    else 
        return false;       
    };




/*
Pseudocode:
evaluate a
evaluate b
evaluate c
conditions 1 - 8; ttt, ttf, tff, tft, ftt, fft, ftf, fff
compare 
*/
var and3 = function (a,b,c) {
   switch(a,b,c){
       case (a=true,b= true,c= true):
          return true;
       case(a=true,b=true,c=false):
           return false;
       case(a=true,b=false,c=true):
           return false;
       case(a=true,b=false,c=false):
           return false;
       case((a=false),(b=true),(c=true)):
           return false;
       case(a=false,b=true,c=false):
           return false;
       case(a=false,b=false,c=true):
           return true;
       case(a=false,b=false,c=false):
           return false;          
   }
   };



/*
c) Now generalize your function to handle any number of values. You will learn better ways 
eventually, but for now use an array to store all the values. Your new function andN(values)
should accept one parameter values, which is an array holding all the values to && together. 
If the argument you provide when calling the function holds values [a,b,c...z], as in andN(26,
[a,b,c...z]), the function should return the same result as (a && b && c && ... z). Make sure 
to handle two special cases: length 0 (then return true) and length 1 (then return that single
value). Again, don't use &&.
*/

/*
Pseudocode:
declare function
accept values
insert values into array
if any member of array = false, return false
else return true
*/


//trial 6 - FINAL - this version controls for special conditions
//-----------------------------------------------------------------------------------------------
var andN = function (values) {
    
    if (values.length<1) {      //handling empty arrays
        return true;
    }
    
    else if (values.length==1) {          //handling single-member arrays
        return values[0];
    }
    
    var newArray = [];               //meat starts here
    for (var i=0; i<values.length; i++){   //loop through array
        
        if (values[i]==false) {      //breaks out on a false value (satisfies && condition)
            return values[i];
        }
        
        else
        newArray +=(values[i]);  //Otherwise, returns a new array of strings - (extra detail
                                 //below is because practice/clarification on this was needed) 
        console.log(newArray);   //Prints increasing array (as strings) with each pass: 
                                 //ex, [1,2,3] prints 1, 12,  123... - it will continue to 
                                 //output each pass until reaching either the end of the   
                                 //values array or finding a false value.
    }

    return Boolean(newArray);    //converted to type-Bool because otherwise
                                 //it prints the array as strings (converting the values to
                                 //boolean when they are added to the array above is 
                                 //redundant, and they still print/output here as strings).
}

/*

END OF PROBLEM 4C
==================================================================================================
*/

/*
d) You've just realized that your effort was doomed: neither of your functions can replace 
the && operator in certain circumstances. Explain why, and find an example which demonstrates 
failure.
*/


//maybe later
/*

END OF PROBLEM 4D
==================================================================================================
*/


/*
5) (Moderate, 35%)

Imagine that a deck of playing cards is sorted by rank and suit: first all the Aces, then the 
Twos, etc, with the Kings last. Within each rank, the suits are in the order Hearts, Diamonds,
Spades, Clubs. Number each card in order from 0 to 51 (i.e. 0=Ace of Hearts; 1=Ace of Diamonds;
51=King of Clubs), and let that ID number represent the corresponding card. Use this encoding
scheme for each part below.

a) Write five related functions to compute different aspects of a card:
    rank(id) returns 1-13, representing the card's rank (for an id between 0-51).
    suit(id) returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).
    color(id) returns "red" or "black".
    name(id) returns the full name of the card (e.g. "Four of Diamonds").
    cardID(rank,suit) returns 0-51, identifying the card id of a given rank and suit.

Assume each function is given valid arguments (i.e. the args are integers in the appropriate 
range). Your functions may call each other-- for example: color could be derived from suit. 
Try to reuse functions to avoid duplicating code.

*/
//scratch test - playing w/ objects
var suit = {};
suit.Hearts= "Hearts";
suit.Diamonds = "Diamonds";
suit.Spades = "Spades";
suit.Clubs = "Clubs";


var tree = {
    a: 1, b:4, c:{suit: suit},
}



var Order = {};
Order.Ace = "Ace";
Order.two = 2;
Order.three = 3;
Order.four = 4;
Order.five = 5;
Order.six = 6;
Order.seven = 7;
Order.eight = 8;
Order.nine = 9;
Order.ten = 10;
Order.Jack = "Jack";
Order.Queen = "Queen";
Order.King = "King";



var card = {
    Order: Order, suit: suit };

var x;
var y;
var Card = {Order, suit};
Card(Ace, Hearts) = 1;
var Deck = {};
Deck.1 = (Card.Ace + Card. Hearts});


/*trial 4 - Order Suit & Deck Objects created - now actually working on assignment 
a) Write five related functions to compute different aspects of a card:
    rank(id) returns 1-13, representing the card's rank (for an id between 0-51).
    suit(id) returns 1-4, representing the card's suit (1 is Hearts, 4 is Clubs).
    color(id) returns "red" or "black".
    name(id) returns the full name of the card (e.g. "Four of Diamonds").
    cardID(rank,suit) returns 0-51, identifying the card id of a given rank and suit.

Assume each function is given valid arguments (i.e. the args are integers in the appropriate 
range). Your functions may call each other-- for example: color could be derived from suit. 
Try to reuse functions to avoid duplicating code.

//------------------------------------------------------------------------------------
*/
var Order = {Ace: 0, 2:4, 3:8, 4:12, 5:16, 6:20, 7:24, 8:28, 9:32, 10:36, Jack:40, Queen:44, King:48}
var Suit = {Hearts:1, Diamonds:2, Spades:3, Clubs:4};
       
    var name;
    var score;
    var Deck = {};

var createDeck = function() {

    
    for(var i in Order) {     //loop through Order object
    name = i;                 //add Order names to name var 
    score = Order[i];         //add Order scores to score var
     for(var b in Suit) {     //take each Order property and loop through the Suits 
        name2 = name;         //set new variable for initial name/ re-set when loop returns
        name2 += " of " + b;  //add Suit name to name2 var
        score2 = score;      //set new variable for initial score/re-set when loop returns
        score2+= Suit[b];    //add Suit score to score2 var
         Deck[name2]= score2;  //add score2 to the Deck properties - the Deck will be undefined w/out
                               //this (why???)
         
    }
    }

   
    return Deck;           //returns Deck object
}


//a. rankOrder(id)  - above objects must be run for this to work (reset objects into an array?)
//------------------------------------------------------------------------------------
var rank  = function(id) {
    id2 = String(id);
    count =0;
    
    for (i in Order){
        
        
        if (i== id2)
        return count;
        count++;
        }
    }


//b. rankSuit(id)
//------------------------------------------------------------------------------------
var rankSuit = function (id) {
    var id = String(id);
    return Suit[id];
}

//c. color(id) returns "red" or "black".
//------------------------------------------------------------------------------------
var color = function(id) {
    shade = rankSuit(id);
    if (shade <3) {
        return "red";
    }
    return "black";
}
//d. name(id) returns the full name of the card (e.g. "Four of Diamonds").
//need to assemble the array first - or use the deck object


//d. trial 2 - refers to Deck object
//this works - but find which Deck object is still printing every value to the console 
//& remove it
//------------------------------------------------------------------------------------
var nameCard = function(id) {
    createDeck();      // no need to include if already created
    for(var i in Deck){
    if  (Deck[i]==Number(id))
    return i;
    }
}
    


//e. cardID(rank,suit) returns 0-51, identifying the card id of a given rank and suit.
//------------------------------------------------------------------------------------
var cardID= function (rank, suit) {
    return Order[rank] + Suit[suit];    
    }


//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//                                END OF HOMEWORK 2
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

var Rank = {Ace: 0, 2:1, 3:2, 4:3, 5:4, 6:5, 7:6, 8:7, 9:8, 10:9, Jack:10, Queen:11, King:12};

Rank.checkCard = function(number) {          //declare object function
    number +='';                             //convert entry to string
for (var i in Rank) {                        //for loop on Rank object
    if (i== number)                          //find key == to enry
        return console.log(Rank[number]);    //if key is found, output key value
}
};


//this works - remember keys must be strings - so if using a number, must be referenced '1', 
//'2', and in as a property reference as obj['number'] etc. - see if statement below
var Rank = {Ace: 0, 2:1, 3:2, 4:3, 5:4, 6:5, 7:6, 8:7, 9:8, 10:9, Jack:10, Queen:11, King:12};

var checkCard = function(number) {
for (var i in Rank) {
    if (i== '2')
        return console.log(Rank['2']); 
}
};






//this works
var Rank = {Ace: 0, 2:1, 3:2, 4:3, 5:4, 6:5, 7:6, 8:7, 9:8, 10:9, Jack:10, Queen:11, King:12};
for (var i in Rank) {
    if (i == 'Ace')
        console.log(Rank.Ace);
}





//this works
var obj = {a: 0, Jack:1, c:2};
for (var i in obj) {
    if (i == 'Jack')
        console.log(obj.Jack);
}



//simplified object - this works
var obj={a:1,b:2,c:3};
for (i in obj) {
    if (i=='b')
        console.log(obj.b);
}


var id; 
var computeNumber = function(card) {
    var rank;
    if (2<=card<=10) {
        rank=(card-1);
        return rank;
    }
    else if (card="Ace") {
        rank= 0;
        return rank;
    }
    else if (card=="Jack") {
        rank= 11;
        return rank;
    }
    else if (card=="Queen") {
        rank= 12;
        return rank;
    }
    else
        rank=13;
        return rank;
q= console.log(rank);
}


//breakout to troubleshoot
var computeNumber = function(card) {
    var rank;
    if (2<=card<=10) {
        rank=(card-1);
        console.log(rank)
        return rank;
    }
}



/*
Exception: expected expression, got keyword 'else'
@Scratchpad/8:11
*/


/*
Hint #1: Notice the patterns as the card id ranges from 0 to 51:

    rank(id) increases slowly, like a quotient;
    suit(id) cycles quickly through 1-4, (almost) like a remainder;
    color(id) alternates R,R,B,B,R,R,B,B...

Where have you seen that kind of pattern before?

Hint #2: Generate your card names by combining a rank word from one array and suit word from 
another.

Write your code into the template file. The template also includes a suite of assertions for 
testing your code. When you evaluate the entire template file, the assertions at the end will
write messages to the console if your functions fail any test. Make sure you pass all the 
tests!

b) Now abandon the assumption of valid arguments and program defensively! Rewrite your five 
functions so that each returns the correct answer when all arguments are valid, but returns 
NaN if any argument is not an integer in the appropriate range.

You may use the provided template file, which has extra tests checking the results of invalid
arguments.
*/
/*
Exception: expected expression, got '&&'
@Scratchpad/8:133
*/