

//Days array
var days = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 
			'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

var gifts = ['A Partridge in a Pear Tree', 'Two Turtle Doves', 'Three French Hens', 'Four Calling Birds',
			'Five Golden Rings', 'Six Geese a Laying', 'Seven Swans a Swimming', 'Eight Maids a Milking',
			'Nine Ladies Dancing', 'Ten Lords a Leaping', 'Eleven Pipers Piping', 'Twelve Drummers Drumming'];			



for(var i = 0; i < 12; i++) {
	console.log('On the ' + days[i] + ' day of Christmas my true love gave to me,');
	console.log(gifts[i]);
		if (gifts.indexOf(gifts[i]) > 0){
			for(var counter = gifts.indexOf(gifts[i]); counter > 0; counter--) {
					if(counter == 0) {
						console.log('And' + gifts[counter-1]);
					} else {
					console.log(gifts[counter-1]);
					}
			}
		}
};

//I know this is not exactly the format you want. as far as i could get right now


function printDays() {
	for(var i = 0; i < days.length; i++) {
	var x = 'On the ' + days[i] + ' day of Christmas my true love gave to me';
	console.log(x);
	};
	return;
}
