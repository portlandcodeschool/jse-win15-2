// Simple version (no error-detection)

// var size = 13;

// var width = 4; use variable for varying size grid

function rank(card) {
  return Math.floor(card/4) + 1;
}

function suit(card) {
  return (card%4) + 1;
}

function cardID(rank,suit) {
  return 4 * (rank - 1) + (suit - 1);
}

// version one using statement:

function color(card) {
  if (suit(card) <= 2) {
    return "red";
  } else {
    return "black";
  };
}

// version two using ternary operator:

function color(card) {
  suitColor = suit(card) <= 2 ? "red": "black";
  return suitColor;
}

var rankString = ["", "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
var suitString = ["", "Hearts", "Diamonds", "Spades", "Clubs"];
  
function name(card) {
  var r = rank(card);
  var s = suit(card);
  var cardName = rankString[r] + " of " + suitString[s];
  return cardName;
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

