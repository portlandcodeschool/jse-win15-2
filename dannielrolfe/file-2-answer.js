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
function round(i) {
	if (i%1 <= .5) {
		return Math.floor(i);
	} else {
		return Math.ceil(i);
	}
};

//Second equation I programmed 
function round(i) {
	var i = Math.round(i);
	return(i);
};

//Third equation I programmed

function round(i) {
	return Math.round(i);
};

//2b
function test(x) {
    var x = (x? false : true);
    y = x; 
    return y;
};

//2c
for (var count = 15 - i; count < 15; count++) {
    i = i-1
    console.log(i+1);
};

//2d 
if (a) { 
    x = 0 
} else {
    x = 1; 
};

//3

//Still working on this problem 

    var days = ['On the first', 
                'On the second', 
                'On the third', 
                'On the fourth', 
                'On the fifth', 
                'On the sixth', 
                'On the seventh', 
                'On the eighth', 
                'On the ninth', 
                'On the tength', 
                'On the eleventh', 
                'On the twelfth'
               ];
    
    
    
    
    var loveSent = ['A Partridge in a Pear Tree',   //1 Index
                    'Two Turtle Doves',             //2 Index
                    'Three French Hens',            //3 Index
                    'Four Calling Birds',           //4 Index
                    'Five Golden Rings',            //5 Index
                    'Six Geese a Laying',           //6 Index
                    'Seven Swans a Swimming',       //7 Index
                    'Eight Maids a Milking',        //8 Index
                    'Nine Ladies Dancing',          //9 Index
                    'Ten Lords a Leaping',          //10 Index
                    'Eleven Pipers Piping',         //11 Index
                    '12 Drummers Drumming'          //12 Index
                   ];
    
    
	for(var frase = 0; frase <= 11; frase++) {
		for(var love = 0; love <= 11; ++love ){	
			
		};	
		
		console.log(days[frase] + " day of Christmas my true love sent to me: " + loveSent[love])
	};

	
 
//4 Still working on this problem 

	
	



//5
//5
    function rank(id) {
        var result = Math.floor(id/4) + 1;
        return result; 

    }; //This ends function rank
    
    
    
    function suit(id) {
        var result = (id%4) + 1;
        return result;
    }; //This ends function suit
    

    var suitNames = [ //This array orders the suits: Hearts, Diamonds, Spades, Clubs
        undefined,    //0 Index This is padding the array (moves all the arrays down one). This index is 0
        "Hearts",     //1 index
        "Diamonds",   //2 index 
        "Spades",     //3 index
        "Clubs"      //4 index
    ];

    var rankNames = [
        undefined,//0 Index This is padding the array (moves all the arrays down one. This index is 0
        "Ace",    //1 index
        "Two",    //2 index
        "Three",  //3 index
        "Four",   //4 index
        "Five",   //5 index
        "Six",    //6 index
        "Seven",  //7 index
        "Eight",  //8 index
        "Nine",   //9 index
        "Ten",    //10 index
        "Jack",   //11 index
        "Queen",  //12 index
        "King"    //13 index      
    ];
    
    function name(id) {
        var rankName = rankNames[rank(id)],
            suitName = suitNames[suit(id)],
            fullName = rankName + " of " + suitName;

        return fullName;

    };//This ends function name    

