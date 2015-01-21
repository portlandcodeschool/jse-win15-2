// Simple version (no error-detection)

// function()--> possible return values

// global variable

var id;

//////////////////////  Rank //////////////////////

//function rank(card) { // --> 1..13
//}



function findrank(id)	{
  
  ranktitle = Math.floor(id/4) + 1;
  
 

  return ranktitle;
  return ranktitlename;
}


findrank(50);


//////////////////////  Suit //////////////////////

//function suit(card) { // --> 1..4
//}
 

function findsuit(id)	{
  
 	suittitle = (id%4) +1;
	
	return suittitle;
}

findsuit(51);



//////////////////////  ID //////////////////////

function findid(rank,suit){
  id = (4*(rank-1)) + (suit-1);
  
  return id;
}

findid(13,1);

//////////////////////  Color //////////////////////

//function color(card) { // -->"red","black"
//}

function findcolor(id)	{
	
	if (id%4 <2)	{
		color = "red"
	}
	else	{
		color = "black"
	}
	return color;
}

findcolor(51);	



//////////////////////  Name //////////////////////

var rankname = ["", "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Jack", "Queen", "King"];
var suitname = ["", "Hearts", "Diamonds", "Spades", "Clubs"];

function findname(id)	{
	
	
  returnname =  (rankname[findrank(id)]) + ' of ' + suitname[findsuit(id)];
  return returnname;
}

findname(51);

//function name(card) { // --> string
//}


// TESTING:
function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(findrank(0)===1,  "Test 1 failed");
assert(findrank(3)===1,  "Test 2 failed");
assert(findrank(51)===13,"Test 3 failed");
assert(findsuit(0)===1,  "Test 4 failed");
assert(findsuit(5)===2,  "Test 5 failed");
assert(findsuit(51)===4, "Test 6 failed");
assert(findid(1,1)===0,    "Test 7 failed");
assert(findid(13,4)===51,  "Test 8 failed");
assert(findid(8,3)===30,   "Test 9 failed");
assert(findcolor(0)==='red',   "Test 10 failed");
assert(findcolor(2)==='black', "Test 11 failed");
assert(findname(5)==='Two of Diamonds', "Test 12 failed");
assert(findname(51)==='King of Clubs',  "Test 13 failed");
