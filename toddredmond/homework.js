//1a
function fractionString (n,d) {
var remainder = n % d;
var wholeNum = (n - remainder) / d;
var fraction = wholeNum + ' ' + remainder + '/' + d;
return fraction;
}

fractionString(7,4);

//1b
 
function fractionString (n,d) {
var remainder = n % d;
var wholeNum = (n - remainder) / d;
  if (wholeNum === 0) {
    var fraction = remainder + '/' + d; 
  }
  else if (remainder === 0) {
    var fraction = wholeNum;
  } else {
    var fraction = wholeNum + ' ' + remainder + '/' + d; 
  }
return fraction;
}


fractionString(3,3);


// 2a
//condensed version
var i, n=3; // assigned value to n for testing
((n - Math.floor(n)) >= .5? i=Math.ceil(n):i=Math.floor(n)); //still tests if n is greater than or equal to .5 but used ternary statement to condense statement down. 

//2b
x = true;
var y = (x? false: true);

//2c
var i=10; //for testing
for (var count = 15 - i ; count < 15 ; count++) { //shorten iteration
  console.log(i); //switched line "i--" after this one to simplify the console.log statement. No math needed.
  i--; // by putting this after the console.log, reverse iteration can happen after statement is printed to log.
}

//2d 
if (a && b) {
   x = 0;
} else if (a || b) {
   x = 1;
} 
  else {
   x=2;
}

//3
//array declaration and assignments
var day = ['First', 'Second', 'third', 'fourth', 'fifth', 'sixth', 
             'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
         
var gifts = ['A Partridge in a Pear Tree', 'Two Turtle Doves', 'Three French Hens', 
         'Four Calling Birds', 'Five Golden Rings', 'Six Geese a Laying', 'Seven Swans a Swimming', 
         'Eight Maids a Milking', 'Nine Ladies Dancing', 'Ten Lords a Leaping','Eleven Pipers Piping', 
         'Twelve Drummers Drumming'];

function gave() {
	//loops through days in order
	for (iterator = 0; iterator < day.length; iterator++) {
	  console.log('On the ' + day[iterator] + " day of Christmas, my true love sent to me: " + gifts[iterator]);
    //loops through reverse order to add days that have already passed.
       for (iterator1 = iterator - 1; iterator1 > 0; iterator1--) {
	       console.log(gifts[iterator1]);
       } // end bracket for 2nd for loop
       
    if (day[iterator] == 'First') { // used to not add first day after the first day.

    } else {
    console.log('and ' + gifts[0]); // adds "and" before the first day when going in reverse order.
    console.log() // needed to create extra line for better user experience.
    } //conditional
	} // end bracket for 1st for loop
} // end bracket for gave function

gave(); // function call

//4a
function and2(a,b){
          if (a == false || b == false) { 
          return false;
          }
          else {
            return true;
          }
        }

        and2((0<1),true);
   

function and3(a,b,c){
          if (a == false || b == false || c == false) {
          return false;
          }
          else {
            return true;
          }
        }

        and3((1>0),(0>1),true)

//4c

function andN(){
  var values = [];
 
  for (var i =0; i < arguments.length; i++) { // loops through passed values to enter in empty array
    values.push(arguments[i]); // adds values to array
    
  } // end of for loop
  
  if (values.length === 0) { // test for zero value
      return true;
     } else {
  		for (var i = 0; i < values.length; i++) { // loop for testing values
          if (values[i] === false) { // tests values to verify if any value is false
          	return false; // exits function if any of the values test false
          } 
        } 
  return true; // exits function with true value if no value tested false.
} // end of condition for zero value
} // end of function

//andN((0<1), (3>4));
//andN(true,false, true, false)
//andN()

//4d 
/*
I am sure of a specific situation that would cause the function to fail that isn't because of poor comparisions
for the values passed. For instance (0 == '0' would pass the test but this is not a fault of the function. Error testing 
could prevent this from occurring and pass back an error message to the user. I will say that the first function is a cumbersome
way to handle avoiding an && statement.)
*/    
//5a,b,c
//Sorry, I combined all sections into one solution. 


// Simple version (no error-detection)
// function()--> possible return values

// array & variable assignments and declarations
var cRank = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
var cSuit = ['Hearts','Diamonds','Spades','Clubs'];
var id;
var rankloc;
var suitloc;

//CardID which takes two values and returns one.
function cardID(rankloc, suitloc) {
  
  if (rankloc === false || rankloc === true || typeof rankloc !='number' 
      || suitloc === false || suitloc === true || typeof suitloc !='number') {
      return NaN;
  } else if (rankloc > 0 && rankloc <= 13 && rankloc % 1 === 0 
             && suitloc >= 0 && suitloc <= 4 && suitloc % 1 === 0 ) {
      id = ((rankloc-1)*4 + suitloc)-1;
      return id;
  } else {
      return NaN;
    }

} 


function suit(id) {
 
  if (id === false || id === true || typeof id !='number') {
    return NaN;
  } else if (id >= 0 && id <= 51 && id % 1 === 0) {
      suitid = cSuit[id%4];
      suitnum = (cSuit.indexOf(suitid))+1;
      return suitnum;
    } else {
      return NaN;
    }
}

function rank(id) {
  
  if (id === false || id === true || typeof id != 'number') { 

    return NaN;
  }
  else if (id >= 0 && id <= 51 && id % 1 === 0) {
    
    rankid = Math.floor((id/4)+1);
    return rankid;
  
  } else {
    return NaN
  }
  
	
}


function color(id) {
  if (id === false || id === true || typeof id != 'number') {
    return NaN;
  } else {
	if (id%4 < 2) {
		colorname = "Red";
    colorname = colorname.toLowerCase();
	} else {
		colorname = 'Black';
    colorname = colorname.toLowerCase();
	}
	return colorname;
  }
}

function name(id) {
  if (id === false || id === true || typeof id != 'number') {
    return NaN;
  } else if (id >= 0 && id <= 51 && id % 1 === 0) {
  var ranknum = rank(id)-1
  var rankname = cRank[ranknum]
  var suitnum = suit(id) - 1;
  var suitname = cSuit[suitnum];
  nameid = rankname + " of " + suitname;
  return nameid;
  }  else {
    return NaN
  }
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

// Extra testing!
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

//First three new tests
assert(name(48)==='King of Hearts',  "Test 47 failed");
assert(color(15)==='black',  "Test 48 failed");
assert(rank(34)=== 9,  "Test 49 failed");

//last three for defensive testing
assert(Number.isNaN(cardID(28,6)), "Test 50 failed");
assert(Number.isNaN(suit("Diamonds")), "Test 51 failed");
assert(Number.isNaN(rank("Jack")), "Test 52 failed");