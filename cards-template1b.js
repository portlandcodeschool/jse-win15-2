// Error-detecting version

function rank(id) {
    numCheck(id); // from 5b
    var r = Math.floor(id / 4) + 1;
    return r;
    console.log(r);
}

function suit(id) {
    numCheck(id); // from 5b
    var s = (id % 4) + 1;
    return s;
    console.log(s);
}

function color(id) {
    numCheck(id); // from 5b
    var c;
    var x = suit(id);
    if (x === 1 || x === 2) {
        c = "red";
    }
    else {
        c = "black";
    }
    return c;
    console.log(c);
}

function name(id) {
    numCheck(id); // from 5b
    var rankText;
    var suitText;

    switch(rank(id)) {
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

    switch(suit(id)) {
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

function cardID(rank, suit) {
    cardCheck(rank, suit); // from 5b
    var cid = (rank * 4) - (5 - suit);
    return cid;
}

// Problem 5b

function numCheck(x) {
    if (typeof x !== "number" || x > 51 || x < 0) {
        x = "NaN";
        return x;
    }
}

function cardCheck(x, y) {
    if (typeof x !== "number" || x > 13 || x < 1) {
        x = "NaN";
        return x;
    }
    if (typeof y !== "number" || y > 4 || y < 1) {
        y = "NaN";
        return y;
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

