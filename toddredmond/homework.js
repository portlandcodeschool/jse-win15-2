/*//1a
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
	var day = ['First', 'Second', 'third', 'fourth', 'fifth', 'sixth', 
                 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
             
	var gifts = ['A Partridge in a Pear Tree', 'Two Turtle Doves', 'Three French Hens', 
             'Four Calling Birds', 'Five Golden Rings', 'Six Geese a Laying', 'Seven Swans a Swimming', 
             'Eight Maids a Milking', 'Nine Ladies Dancing', 'Ten Lords a Leaping','Eleven Pipers Piping', 
             'Twelve Drummers Drumming'];

function gave() {
	for (iterator = 0; iterator < day.length; iterator++) {
	  console.log('On the ' + day[iterator] + " day of Christmas, my true love sent to me: " + gifts[iterator]);
    
       for (iterator1 = iterator - 1; iterator1 > 0; iterator1--) {
	       console.log(gifts[iterator1]);
       } // end bracket for 2nd for loop
       
    if (day[iterator] == 'First') {
      //console.log('work');
      //return; 
    } else {
    console.log('and ' + gifts[0]);
    console.log()
    } //conditional
	} // end bracket for 1st for loop
} // end bracket for gave function

gave();

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
*/        
//5a


// Simple version (no error-detection)

// function()--> possible return values

function name(card) { // --> string
}
var cRank = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
var cSuit = ['Hearts','Diamonds','Spades','Clubs'];
var id;
var rankloc;
var suitloc;

function cardID(rankloc, suitloc) {
 id = ((rankloc-1)*4 + suitloc)-1;
 return id;
}

function suit(id) {
 suitid = cSuit[id%4];
 suitnum = (cSuit.indexOf(suitid))+1; 
 return suitnum;
}

function rank(id) {
	rankid = Math.floor((id/4)+1);
  //var rankname = cRank[rankid];
	return rankid;
}

/*function color(id) {
	if (suit(id) == 'Hearts' || 'Diamonds') {
		colorname = "red";
		return colorname;
	} else {
		colorname = 'Black';
		return colorname;
	}
} */

function color(id) {
	if (id%4 < 2) {
		colorname = "Red";
    colorname = colorname.toLowerCase();
	} else {
		colorname = 'Black';
    colorname = colorname.toLowerCase();
	}
	return colorname;
}

function name(id) {
	
  var ranknum = rank(id)-1
  var rankname = cRank[ranknum]
  var suitnum = suit(id) - 1;
  var suitname = cSuit[suitnum];
  nameid = rankname + " of " + suitname;
  return nameid;
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

