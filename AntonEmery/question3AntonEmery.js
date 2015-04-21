
//Days array
var days = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 
			'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

var gifts = ['Partridge in a Pear Tree', 'Two Turtle Doves', 'Three French Hens', 'Four Calling Birds',
			'Five Golden Rings', 'Six Geese a Laying', 'Seven Swans a Swimming', 'Eight Maids a Milking',
			'Nine Ladies Dancing', 'Ten Lords a Leaping', 'Eleven Pipers Piping', 'Twelve Drummers Drumming'];			


//initial loop that prints out 'On the X day of Christmas'
var output = '';
for(var day = 0; day < 12; day++) {
	output += ('On the ' + days[day] + ' day of Christmas my true love gave to me\n');
	for(counter = day; counter >= 0; counter--) {
			if(day == 0){
			output += ('A ' + gifts[counter] + '\n');	
			} else if (counter == 0) {
			output += ('And a ' + gifts[counter] + '\n');	
			} else {
			output += (gifts[counter] + '\n');
			}
		}
	};
	console.log(output);


