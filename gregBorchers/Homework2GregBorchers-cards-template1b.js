// Greg Borchers homework 2
// extended version (with error-detection)

var deckOfCards =  // Aces[Heart,Diamond,Spade,Club], Twos[Heart,Diamond,Spade,Club]... Eights[....]
                [ "Ace of Hearts"
                , "Ace of Diamonds"
                , "Ace of Spades"
                , "Ace of Clubs"

                , "Two of Hearts"
                , "Two of Diamonds"
                , "Two of Spades"
                , "Two of Clubs"

                , "Three of Hearts"
                , "Three of Diamonds"
                , "Three of Spades"
                , "Three of Clubs"

                , "Four of Hearts"
                , "Four of Diamonds"
                , "Four of Spades"
                , "Four of Clubs"
                                
                , "Five of Hearts"
                , "Five of Diamonds"
                , "Five of Spades"
                , "Five of Clubs"

                , "Six of Hearts"
                , "Six of Diamonds"
                , "Six of Spades"
                , "Six of Clubs"

                , "Seven of Hearts"
                , "Seven of Diamonds"
                , "Seven of Spades"
                , "Seven of Clubs"

                , "Eight of Hearts"
                , "Eight of Diamonds"
                , "Eight of Spades"
                , "Eight of Clubs"

                , "Nine of Hearts"
                , "Nine of Diamonds"
                , "Nine of Spades"
                , "Nine of Clubs"

                , "Ten of Hearts"
                , "Ten of Diamonds"
                , "Ten of Spades"
                , "Ten of Clubs"

                , "Jack of Hearts"
                , "Jack of Diamonds"
                , "Jack of Spades"
                , "Jack of Clubs"

                , "Queen of Hearts"
                , "Queen of Diamonds"
                , "Queen of Spades"
                , "Queen of Clubs"

                , "King of Hearts"
                , "King of Diamonds"
                , "King of Spades"
                , "King of Clubs" ];

// **** alternative to build deckOfCards[] **** 
// Loop across two string arrays to fill the array
// Did not do this because having the static array was a useful visual reference
// Here is code that would fill the array

// var suitNames = ["Hearts", "Diamonds", "Spades", "Clubs"];
// var rankNames = ["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
// var deckOfCards2 = [];
// var cardID =0;

// for (var i = 0; i < rankNames.length; i++) {
//   for (var j = 0; j < suitNames.length; j++) {
//     deckOfCards2[cardID] =  rankNames[i] + " of " + suitNames[j]
//     console.log( deckOfCards2[cardID] );
//     cardID++;
//   };
// };




//****************************************** rank(card)
// function rank(card) { // --> 1..13
// }

function rank(id) {
  // validate inputs
  if (!( (typeof id === 'number')
      && (id%1 === 0) // is integer
      && id < 52      // is in range
      && id >= 0))    // is in range
   {   
      return NaN;   // INPUT ERROR
   }
  return Math.trunc(id/4)+1;
};



//****************************************** suit(card)
// function suit(card) { // --> 1..4
// }

function suit(id) {
  // validate inputs
  if (!( (typeof id === "number")
      && (id%1 === 0) // is integer
      && id < 52      // is in range
      && id >= 0))    // is in range
   {   
      return NaN;   // INPUT ERROR
   }

  return (id%4)+1;
};
//****************************************** color(card)
// function color(card) { // -->"red","black"
// }

var color = function(id){
  var cardColor = "";
  
  // validate inputs
  if (!( (typeof id === 'number')
      && (id%1 === 0) // is integer
      && id < 52      // is in range
      && id >= 0))    // is in range
   {   
      return NaN;   // INPUT ERROR
   }
  
  
  //TODO assert(id >= 0 && id <=3, "id is out of range");
  if ( (suit(id) === 0) || (suit(id) === 1 ) )
  {
    cardColor = "red";
  }
  else
  {
    cardColor = "black";
  }
  return cardColor;
};

//****************************************** cardID(rank,suit) 
// function cardID(rank,suit) { // --> 0..51
// }

function cardID(rank,suit) {
  if (!( (typeof rank === 'number')
      && (rank%1 === 0) // is integer
      && rank <= 13      // is in range
      && rank > 0))    // is in range
   {   
      return NaN;   // INPUT ERROR
   }

   if (!( (typeof suit === 'number')
      && (suit%1 === 0) // is integer
      && suit <= 4     // is in range
      && suit > 0))     // is in range
   {   
      return NaN;   // INPUT ERROR
   }

  return ((rank - 1) * 4 + (suit - 1));
}

//****************************************** name(card) 
// function name(card) { // --> string
// }

function name(id) {
  // validate inputs
  if (!( (typeof id === 'number')
      && (id%1 === 0) // is integer
      && id < 52      // is in range
      && id >= 0))    // is in range
   {   
      return NaN;   // INPUT ERROR
   }
  
  
  assert ((id < deckOfCards.length && id >=0) , 'invalid id' );
  return deckOfCards[id];
}


//****************************************** // TESTING:
function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(rank(0)===1,  "Test 1 rank(0)===1 failed with " + rank(0));
assert(rank(3)===1,  "Test 2 rank(3)===1 failed with " + rank(3));
assert(rank(51)===13,"Test 3 rank(51)===13 failed with " +rank(51));
assert(suit(0)===1,  "Test 4 suit(0)====1 failed with " + suit(0));
assert(suit(5)===2,  "Test 5 suit(5)===2 failed with " + suit(5) );
assert(suit(51)===4, "Test 6 suit(51)====4 failed with " + suit(51));

assert(cardID(1,1)===0,             "Test 7  cardID(1,1)===0,            failed with " + cardID(1,1));
assert(cardID(13,4)===51,           "Test 8  cardID(13,4)===51,          failed with " + cardID(13,4));
assert(cardID(8,3)===30,            "Test 9  cardID(8,3)===30,           failed with " + cardID(8,3));
assert(color(0)==='red',            "Test 10 color(0)==='red',           failed with " + color(0));
assert(color(2)==='black',          "Test 11 color(2)==='black',         failed with " + color(2));
assert(name(5)==='Two of Diamonds', "Test 12 name(5)==='Two of Diamonds' failed with " + name(5));
assert(name(51)==='King of Clubs',  "Test 13 name(51)==='King of Clubs'  failed with " + name(51));

assert(cardID(13,1)===48,           "Test 14  cardID(13,1)===48,          failed with " + cardID(13,1));
assert(cardID(1,4)===3,             "Test 15  cardID(1,1)===3,            failed with " + cardID(1,4));

// Extra testing! // These tests check that invalid arguments produce invalid
// output. 
// I.e. "garbage in guarantees garbage out".
assert(Number.isNaN(rank(52)),        "Test 21 failed with " + (rank(52)));
assert(Number.isNaN(rank("0")),       "Test 22 failed with " + (rank("0")));
assert(Number.isNaN(rank(-1)),        "Test 23 failed with " + (rank(-1)));
assert(Number.isNaN(rank(2.5)),       "Test 24 failed with " + (rank(2.5)));
assert(Number.isNaN(rank(undefined)), "Test 25 failed with " + (rank(undefined)));

assert(Number.isNaN(suit(52)),   "Test 26 failed with " + suit(52));
assert(Number.isNaN(suit(false)),"Test 27 failed with " + suit(false));
assert(Number.isNaN(suit(true)), "Test 28 failed with " + suit(true));
assert(Number.isNaN(suit(-1)),   "Test 29 failed with " + suit(-1));
assert(Number.isNaN(suit(3.14)), "Test 30 failed with " + suit(3.14));

assert(Number.isNaN(cardID(0,1)),   "Test 31 failed with " + (cardID(0,1)) );
assert(Number.isNaN(cardID("1",1)), "Test 32 failed with " + (cardID("1",1)));
assert(Number.isNaN(cardID(1,5)),   "Test 33 failed with " + (cardID(1,5)) );
assert(Number.isNaN(cardID(14,1)),  "Test 34 failed with " + (cardID(14,1)));
assert(Number.isNaN(cardID(-1,-1)), "Test 35 failed with " + (cardID(-1,-1)));
assert(Number.isNaN(cardID(0.5,1)), "Test 36 failed with " + (cardID(0.5,1)));
assert(Number.isNaN(cardID(1,NaN)), "Test 37 failed with " + (cardID(1,NaN)));

assert(Number.isNaN(color('apple')),"Test 41 failed with " + color('apple'));
assert(Number.isNaN(color(true)),   "Test 42 failed with " + color(true));
assert(Number.isNaN(name(false)),   "Test 43 failed with " + name(false));
assert(Number.isNaN(name(-1)),      "Test 44 failed with " + name(-1));
assert(Number.isNaN(name(52)),      "Test 45 failed with " + name(52));
assert(Number.isNaN(name(NaN)),     "Test 46 failed with " + name(NaN));
console.log("base test run completed");

// write 3 new assertions to test success cases 
assert(cardID(13,1)===48,           "Test 14  cardID(13,1)===48,          failed with " + cardID(13,1));
assert(cardID(1,4)===3,             "Test 15  cardID(1,1)===3,            failed with " + cardID(1,4));
assert(cardID(13,2)===49,             "Test 15  cardID(1,2)===49,            failed with " + cardID(13,2));

//3 more assertions to test failure cases.
assert(Number.isNaN(name(Infinity)),     "Test 46 failed with " + name(Infinity));
assert(Number.isNaN(name(-Infinity)),     "Test 46 failed with " + name(-Infinity));
assert(Number.isNaN(name(1.5)),     "Test 46 failed with " + name(1.5));
console.log("extended test run completed");



