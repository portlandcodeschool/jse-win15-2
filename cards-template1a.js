// Simple version (no error-detection)

// function()--> possible return values


//Rank Function
function rank(id) { 
  
  return math.floor (id/4)+1
  }

//Suit Function
function suit(id) { 
 
  return (id%4)+1;   
 
  // --> 1..4
}

//CardID Function
function cardID(rank,suit) { // --> 0..51
}
//Color Function
function color(id) { // -->"red","black"
  var x = suit(id);
  if (x == 1|| x==2)
    return "red";
  else
    return "black";
    
    //Or tertiary return (x<=2) "Red" : "Black";
}
//Name Function UNFINISHED
function name(id) { // --> string
  var suits = ["hearts","Diamonds", "Spades", "Clubs"]
  var cards = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]
// 

}


// TESTING:
function assert(claim,message) {
    if (!claim) console.error(message);
}

function rank(card) { // --> 1..13
}

function suit(card) { // --> 1..4
}

function cardID(rank,suit) { // --> 0..51
}

function color(card) { // -->"red","black"
}

function name(card) { // --> string
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

