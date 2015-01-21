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

//Solution from teachers
 var y = (x? x: false);

//or

var y = x || false;

//2c
for (var count = 15 - i; count < 15; count++) {
    i = i-1
    console.log(i+1);
};

//solution
for ( ; i > 0 ; i-- {
     console.log(i);
}

//or
while (i>0) {
    console.log(i);
    i--;
};


//or
while (i>0) {
    console.log(i--)
};

//2d 
if (a) { 
    x = 0 
} else {
    x = 1; 
};

//Solution

var x = (a && b)? 0: ((a||b)? 1; 2);
                      
//or
var x = 0;
if (!a) x++;
if (!b) x++;

//or
var x = !a + !b;
                      
//3

//Still working on this problem 
//This answer was produced in class with Dan

var alphabet = [    
                    'A Partridge in a Pear Tree',   //0 Index
                    'Two Turtle Doves',             //1 Index
                    'Three French Hens',            //2 Index
                    'Four Calling Birds',           //3 Index
                    'Five Golden Rings',            //4 Index
                    'Six Geese a Laying',           //5 Index
                    'Seven Swans a Swimming',       //6 Index
                    'Eight Maids a Milking',        //7 Index
                    'Nine Ladies Dancing',          //8 Index
                    'Ten Lords a Leaping',          //9 Index
                    'Eleven Pipers Piping',         //10 Index
                    '12 Drummers Drumming'          //11 Index
               ];

var ordinals = [ 
                'first', 
                'second', 
                'third', 
                'fourth', 
                'fifth', 
                'sixth', 
                'seventh', 
                'eighth', 
                'ninth', 
                'tength', 
                'eleventh', 
                'twelfth'
               ];
    

for(var day = 0; day <= 11 ; ++day) {
    var frase = 'On the ' + ordinals[day] + ' days of christmas' + '\n' + 'my true love sent to me:' + '\n';
    var str = '';
    for(var letter = day; letter > 0 ; --letter) { 
        str = str + alphabet[letter] + '\n';
    }
    console.log(frase + str + '\n');
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

