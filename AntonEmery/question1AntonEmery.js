/* Revisit your solution to homework #1, problem 5, which expresses an improper fraction as a proper one, and turn your solution into a function.

a) Write a function fractionString(n,d) which takes 2 parameters (n,d) and returns a string. For example, fractionString(7,4) should return "1 3/4", and fractionString(3,3) should (for now) return "1 0/3". As before, assume that n and d are both positive integers.

took 1.5 hrs
*/

/* original solution
Math.floor(n/d) + " " + (n%d) + '/' + d
*/

function fractionString (n, d) {
	var wholeNumber = Math.floor(n/d);
	var numerator = n % d;
	var denominator = d;
	var answer = Math.floor(n/d) + " " + (n % d) + '/' + d;
	return answer;
}

console.log(fractionString(7, 4));

/* b) Write a second version of your function which improves the output in two special cases:

A output string like "0 1/2" should be simplified to just "1/2";
A output string like "1 0/3" should be simplified to just "1".  */

function fractionString (n, d) {
	var wholeNumber = Math.floor(n/d);
	var numerator = n % d;
	var denominator = d;
	var answer;
	if (wholeNumber == 0) {
		answer = (n % d) + '/' + d;
	} else if (numerator == 0) {
		answer = Math.floor(n/d);
	} else {
		answer = Math.floor(n/d) + " " + (n % d) + '/' + d;
	}
	return answer;
}

console.log(fractionString(3, 4));