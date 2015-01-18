// Greg Borchers homework 2
// Simple version (no error-detection)

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
// Loop across two string arrays to fill the arrary
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
  return Math.trunc(id/4)+1;
}



//****************************************** suit(card)
// function suit(card) { // --> 1..4
// }

function suit(id) {
  return (id%4)+1;
}



//****************************************** cardID(rank,suit) 
// function cardID(rank,suit) { // --> 0..51
// }

function cardID(rank,suit) {
  return ((rank - 1) * 4 + (suit - 1));
}


//****************************************** color(card)
// function color(card) { // -->"red","black"
// }

var color = function(id){
  var cardColor = "";
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


//****************************************** name(card) 
// function name(card) { // --> string
// }

function name(id) {
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

