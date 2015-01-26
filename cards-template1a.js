// Simple version (no error-detection)

// function()--> possible return values

function rank(card) { // --> 1..13
    var r = Math.floor(card / 4) + 1;
    return r;
}

function suit(card) { // --> 1..4
    var s = (card % 4) + 1;
    return s;
}

function cardID(rank,suit) { // --> 0..51
    var cid = (rank * 4) - (5 - suit);
    return cid;
}

function color(card) { // -->"red","black"
    var c;
    var x = suit(card);
    if (x === 1 || x === 2) {
        c = "red";
    }
    else {
        c = "black";
    }
    return c;
}

function name(card) { // --> string
    var rankText;
    var suitText;

    switch(rank(card)) {
        case 1:
            rankText = "Ace of ";
            break;
        case 2:
            rankText = "Two of ";
            break;
        case 3:
            rankText = "Three of ";
            break;
        case 4:
            rankText = "Four of ";
            break;
        case 5:
            rankText = "Five of ";
            break;
        case 6:
            rankText = "Six of ";
            break;
        case 7:
            rankText = "Seven of ";
            break;
        case 8:
            rankText = "Eight of ";
            break;
        case 9:
            rankText = "Nine of ";
            break;
        case 10:
            rankText = "Ten of ";
            break;
        case 11:
            rankText = "Jack of ";
            break;
        case 12:
            rankText = "Queen of ";
            break;
        case 13:
            rankText = "King of ";
            break;
    }

    switch(suit(card)) {
        case 1:
            suitText = "Hearts";
            break;
        case 2:
            suitText = "Diamonds";
            break;
        case 3:
            suitText = "Spades";
            break;
        case 4:
            suitText = "Clubs";
            break;
    }
    return rankText + suitText;
    console.log(rankText + suitText);
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

