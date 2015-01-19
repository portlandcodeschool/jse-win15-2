/**
 * Created by mtupper on 1/16/15.
 */

// Problem 1-a
function fractionString(n, d) {
    var i = (Math.floor(n/d)),
        n = (n % d),
        pf = i.toString() + " " + n.toString() + "/" + d.toString();

    return pf;
}

// Problem 1-b
function fractionString2(n, d) {
    var i = (Math.floor(n/d));
    var n = (n % d);

    if (i !== 0 && n !== 0) {
        pf = i.toString() + " " + n.toString() + "/" + d.toString();
    }
    if (i === 0) {
        pf = n.toString() + "/" + d.toString();
    }
    else {
        pf = i.toString();
    }

    return pf;
}

// Problem 2-a

/*
var i;
if ((n - Math.floor(n)) >= .5) {
    i = Math.ceil(n);
} else {
    i = Math.floor(n);
}
*/

var i;
((n - Math.floor(n)) >=.5) ? i = Math.ceil(n) : i = Math.floor(n);

// Problem 2-b

/*
 var y, xIsFalse = (x? false : true);
 if (xIsFalse)
 y = false;
 else
 y = x;
 */

var y = (x? y = x : y = false);

// Problem 2-c

/*
 for (var count = 15 - i ; count < 15 ; count=count+1) {
 i = i-1;
 console.log(i+1)
 }
 */

for (count = 15 - i; count < 15; count++) {
    i -= 1;
    console.log(i++);
}

// Problem 2-d


/*
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
(a)? ((b)? x = 0: x = 1) : ((b)? x = 1: x = 2);


// Problem 3 - Twelve Days of Christmas

function twelveDaysOfXmas() {

    var opener = " day of Christmas\nMy true love gave to me:\n"

    var dayCount = [
        "first",
        "second",
        "third",
        "fourth",
        "fifth",
        "sixth",
        "seventh",
        "eighth",
        "ninth",
        "tenth",
        "eleventh",
        "twelfth"
    ];

    var gifts = [
        "Partridge in a Pear Tree\n\n",
        "Two Turtle Doves\n",
        "Three French Hens\n",
        "Four Calling Birds\n",
        "Five Golden Rings\n",
        "Six Geese a Laying\n",
        "Seven Swans a Swimming\n",
        "Eight Maids a Milking\n",
        "Nine Ladies Dancing\n",
        "Ten Lords a Leaping\n",
        "Eleven Pipers Piping\n",
        "Twelve Drummers Drumming\n"
    ];

    var lyrics;
    var giftCount=[];

    for (i = 0; i < dayCount.length; i++) {
        if (i === 0) {
            lyrics = "On the " + dayCount[i] + opener + "A " + gifts[i];
        }
        else {
            giftCount.unshift(gifts[i]);
            lyrics += "On the " + dayCount[i] + opener + giftCount + "And a " + gifts[0];
        }
    }

    console.log(lyrics);
    return lyrics;
}

// Problem 4a

function and2(a,b) {
    if (a === true) {
        if (b === true) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

// Problem 4b

function and3(a,b,c) {
    if (a === true) {
        if (b === true) {
            if (c === true) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

// Problem 4c

function andN(values) {
    var v = [];

    if (values.length === 0) {
        return true;
    }

    if (values.length === 1) {
        return (values);
    }

    for (i =0; i < values.length; i++) {
        if (values[i] !== true) {
            return false;
        }
        else {
            v.push(true);
        }
    }

    if (v.length === values.length) {
        return true;
    }
}

// Problem 4d

// Work on answer here


// A = 0,1,2,3
// 2 = 4,5,6,7
// 3 = 8,9,10,11

// Problem 5a

function rank(id) {
    var r = Math.floor(id / 4) + 1;
    return r;
    console.log(r);
}

function suit(id) {
    var s = (id % 4) + 1;
    return s;
    console.log(s);
}

function color(id) {
    var c;
    var x = (id % 4) + 1;
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
    var cid = (rank * 4) - (5 - suit);
    return cid;
}