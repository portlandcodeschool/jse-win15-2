1. 
	1A. function fractionString(n,d) {
		var output = Math.floor(n/d) + ' ' + (n % d) + '/' + d;
		return output;
	}

	1B. function fractionString(n,d) {
		var wholeNum = Math.floor(n/d);
		var num = (n % d);

		output = (wholeNum?wholeNum:'') + (num?(' ' + num + '/' + d):'');
		
		return output;
	}

2.
	2A. ((n - Math.floor(n)) >= .5)?(i = Math.ceil(n)):(i = Math.floor(n));
	2B. (!x && ((typeof x) != "boolean"))?(y = false):(y = x);
	2C. for (var count = i; count > 0; count--) { console.log(count); }
	2D. var x;
		if ((B && !A) || (A && !B)) { x = 1; }
		else if (!A && !B) { x = 2; }
		else { x = 0; }

3. 
	function twelveDays() {
		var gifts = new Array(13);
		gifts[12] = ["Twelve Drummers Drumming", "twelfth"];
		gifts[11] = ["Eleven Pipers Piping", "eleventh"];
		gifts[10] = ["Ten Lords a Leaping", "tenth"];
		gifts[9] = ["Nine Ladies Dancing", "ninth"];
		gifts[8] = ["Eight Maids a Milking", "eighth"];
		gifts[7] = ["Seven Swans a Swimming", "seventh"];
		gifts[6] = ["Six Geese a Laying", "sixth"];
		gifts[5] = ["Five Golden Rings", "fifth"];
		gifts[4] = ["Four Calling Birds", "fourth"];
		gifts[3] = ["Three French Hens", "third"];
		gifts[2] = ["Two Turtle Doves", "second"];
		gifts[1] = ["Partridge in a Pear Tree", "first"];
		var day;
		var output_str = "";

		for (var i = 1; i <= 12; i++) { //loop do go through days
			output_str += firstLines(gifts[i][1]); //generate the first lines using the custom day in gifts[x][1]

			for (var j = i; j > 0; j--) { //loop for writing lines(j) for each day(i)
                if (i == 1) { //If it's the first day
                     output_str += "A "
                } else if (j == 1) { //Any other day but with first day's present
                     output_str += "And a "; 
                }
				output_str += gifts[j][0] + '\n';
			}
			output_str += '\n';
		}
        return output_str;
	}

	function firstLines(day) { return "On the " + day + " of Christmas\nmy true love sent to me:\n"; }

	console.log(twelveDays());

4. 
	4A. function and2(a, b) {
			var same = false;
			if (a) {
				if (b) {
					same = true;
				}
			}
			return same;
	   }

	4B. function and3(a, b, c) {
			var same = false;
			if (c) {
				if (and2(a,b)) {
					same = true;
				}
			}
			return same;
		}

	4C. function andN(values) {
			var same = true;
			for (var i = 0; i < values.length; i++) {
				if (!values[i]) { same = false; break; }
			}
			return same;
		}

	4D. _____________________________________

5.A. See card-template1a.js
5.B. See card-template1b.js
