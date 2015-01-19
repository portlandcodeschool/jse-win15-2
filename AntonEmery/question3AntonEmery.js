
//Days array
var days = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 
			'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

var gifts = ['A Partridge in a Pear Tree', '2 Turtle Doves', '3 French Hens', '4 Calling Birds',
			'5 Golden Rings', '6 Geese a Laying', '7 Swans a Swimming', '8 Maids a Milking',
			'9 Ladies Dancing', '10 Lords a Leaping', '11 Pipers Piping', '12 Drummers Drumming'];			


//initial loop that prints out 'On the X day of Christmas'

for(var i = 0; i < 12; i++) {
	console.log('On the ' + days[i] + ' day of Christmas my true love gave to me');
	console.log(gifts[i]);
	//if gifts[i] > 0
		//counter = gifts[i]; counter >= 0; counter--
		//print gifts[counter]
	};