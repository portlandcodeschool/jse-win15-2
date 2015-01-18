// 1a) 
		function fractionString(n,d){
			var wholeNumber = Math.floor(n/d);
            
			if (n % d === 0) { //This code checks if the variable is a whole number 
				var integer = (0 + "/" + (d)); //If the variable is a whole number then return ( 0 + fraction)
			} else {
				integer = ((n%d) + "/" + (d)); //This returns 1 + fraction 	
			} 
            
            return wholeNumber + " " + integer;
            
		};

// 1b)


   function fractionString(n,d) {
        var wholeNumber = Math.floor(n/d) || ""; 
        
            
        if (n % d === 0) { //This code checks if the variable is a whole number 

			var integer = (n/d); //This converts any var integer to 1		
			return wholeNumber + ""; //This returns wholeNumber if integer is a wholeNumber
		
		} else {
			
			if (wholeNumber > 0) { //This checks if wholeNumber is greater than 1 
				
				integer = ((n%d) + "/" + (d)); //This returns wholeNumber + fraction 
				return wholeNumber + " " + integer;
				
			} else {
				
				integer = ((n%d) + "/" + (d)); //This creates the fraction
				return "" + integer; //This returns only the integer
			
			};

    };
};


//2 

//2a

//This was the first equation I programmed 
function round (i) {
	if (i%1 <= .5) {
		return Math.floor(i);
	} else {
		return Math.ceil(i);
	}
};

//Second equation I programmed 
function round (i) {
	var i = Math.round(i);
	return(i);
};

//Third equation I programmed

function round (i) {
	return Math.round(i);
};



//5

var suitsArray = [ //This array orders the suits: Hearts, Diamonds, Spades, Clubs
    "Hearts",     //0 index
    "Diamonds",   //1 index 
    "Spades",     //2 index
    "Clubs",      //3 index
];
    
var rankArray = [
    "Ace",    //0 index
    "Two",    //1 index
    "Three",  //2 index
    "Four",   //3 index
    "Five",   //4 index
    "Six",    //5 index
    "Seven",  //6 index
    "Eight",  //7 index
    "Nine",   //8 index
    "Ten",    //9 index
    "Jack",   //10 index
    "Queen",  //11 index
    "King"    //12 index      
];

//5a

function rank(id) { //This function returns the rank Ace to King
    rankNumber = rankArray[id]; 
    return rankNumber;
};

//5b

function suit(id) { //This function returns the suite
    suitReturn = suitsArray[id];
    return suitReturn;
};

//5c -------- HELP
function color(id) {
    if (suitsArray[id] === 0 || 2  ) { //This if statement checks if id is equal to less than 1
        console.log(suitsArray[id]);
        colorValue = "Red"
        
    } else if (suitsArray[id] === 1 || 2 ) { //This if statement checks if id is equal to less than 3
        colorValue = "Black";
        
    } else {
        colorValue = "Does not exist"; //This statements checks if id is greater than 3
    }
    
    return colorValue;
}; 
    
    
//5e
function name(id, id) {
    suitReturn = suitsArray[id];
    rankNumber = rankArray[id];
    return rankNumber + " of " + suitReturn;  
};


//5f

function cardID(rank,suit) {
    suitReturn = suitsArray[suit];
    rankNumber = rankArray[rank];
    return rankNumber + " of " + suitReturn;
};






