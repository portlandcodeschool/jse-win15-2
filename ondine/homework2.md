### Ondine Gallatin

### Homework #2

Due Monday, 1/19

Please also read the [learning objectives](objectives.md) for this week.

---

**1)** _(Easy, 10% of total time)_

**a)** Write a function `fractionString(n,d)` which takes 2 parameters (n,d) and returns a string.  For example, 
`fractionString(7,4)` should return "1 3/4", and `fractionString(3,3)` should (for now) return "1 0/3".  As before, assume that _n_ and _d_ are both positive integers.

```
function fractionString(n, d) {
  var numeratorTwo = n % d;
  var number = Math.floor(n / d);
  var result = number + ' ' + numeratorTwo + '/' + d;
  return result;
}
```

**b)** Write a second version of your function which improves the output in two special cases:

- An output string like "0 1/2" should be simplified to just "1/2";
- An output string like "1 0/3" should be simplified to just "1".

```
function fractionStringTwo(n, d) {
  var numeratorTwo = n % d;
  var number = Math.floor(n / d);
  if (number < 1) {
    var result = numeratorTwo + '/' + d;
  } else if (numeratorTwo == 0) {
    result = number;
  } else {
    result = number + ' ' + numeratorTwo + '/' + d;
    };
  return result;
}
```
---

**2)** _(Moderate, 15%)_

// not done

Rewrite each block below as the simplest equivalent you can discover.  Your equivalent should produce the same final conditions as the original code given the same initial conditions.
In each case, if there is an undeclared variable, assume it has been declared earlier and set to an unknown value.

**a)**

```
var i;
if ((n - Math.floor(n)) >= .5) {
   i = Math.ceil(n);
} else {
  i = Math.floor(n);
}
```


**b)**
```
var y, xIsFalse = (x? false : true);
  if (xIsFalse)
    y = false;
  else
   y = x;
```

```
condition ? expr1 : expr2




```

**c)**
```
for (var count = 15 - i ; count < 15 ; count=count+1) {
    i = i-1;
    console.log(i+1)
}
```
```


```

**d)**
```
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
```


---

**3)** _(Moderate, 20%)_

Write a function which returns a string containing the entire lyrics for the song "The Twelve Days of Christmas" as a single string which includes a '\n' at each line break.
Use helper functions, loops, and/or arrays to store repeated elements.

var daysArray = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
var giftArray = ['Twelve drummers drumming\n', 
'Eleven pipers piping\n', 'Ten lords a-leaping\n', 'Nine ladies dancing\n', 'Eight maids a-milking\n', 'Seven swans a-swimming\n', 'Six geese a-laying\n', 'Five golden rings\n', 'Four calling birds\n', 'Three French hens\n', 'Two turtle doves\n and a partridge in a pear tree.', 'A partridge in a pear tree'];

var day = daysArray[]

function lyric() {
    
  varVerse = 'On the' + daysArray[day] + 'day of Christmas\n my true love gave to me:';
}


---

**4)** _(Difficult, 20%)_

Suppose the '&' key on your keyboard is missing, and you want to be able to continue programming without it.  You decide to simulate the && operator with a function!

**a)**
Write a function `and2(a,b)` which tries to simulate the && operator: it should always return the same result as `(a && b)` for any values of _a_ and _b_.  (For example, `and2((0>1),true)` should return _false_.)  But you can't use && itself within your function!

```
function and2(a,b) {
  if a

}

```

**b)** Write another function `and3(a,b,c)` which tries to simulate a double-&& operator: it should always return the same result as `(a && b && c)` for any values of a,b,c.  (For example, `and3((1>0),(0>1),true)` should return _false_.)  As before, you're not allowed to use && itself. Remember that you can call functions from functions!

```
function and3(a,b,c) {
  

}

```

**c)**
Now generalize your function to handle any number of values.  You will learn better ways eventually, but for now use an array to store all the values.
Your new function `andN(values)` should accept one parameter _values_, which is an array holding all the values to && together.
If the argument you provide when calling the function holds values [a,b,c...z], as in
`andN(26,[a,b,c...z])`, the function should return the same result as `(a && b && c && ... z)`.
Make sure to handle two special cases: length 0 (then return _true_) and length 1 (then return that single value).
Again, don't use &&.

```
var values = []
function andN(values)

```

**d)**
You've just realized that your effort was doomed: neither of your functions can replace the && operator in certain circumstances.  Explain why, and find an example which demonstrates failure.

---

**5)** _(Moderate, 35%)_

**a)** Write five related functions to compute different aspects of a card:

```
function rank(card) {
  return Math.floor(card/4) + 1;
}
```

```
function suit(card) {
  return (card%4) + 1;
}
```

```
function cardID(rank,suit) {
  return 4 * (rank - 1) + (suit - 1);
}
```

// version one using statement:

```
function color(card) {
  if (suit(card) <= 2) {
    return "red";
  } else {
    return "black";
  };
}
```

// version two using ternary operator:

```
function color(card) {
  suitColor = suit(card) <= 2 ? "red": "black";
  return suitColor;
}
```

```
var rankString = ["", "Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
var suitString = ["", "Hearts", "Diamonds", "Spades", "Clubs"];

function name(card) {
  var r = rank(card);
  var s = suit(card);
  var cardName = rankString[r] + " of " + suitString[s];
  return cardName;
}
```

**b)**
Now abandon the assumption of valid arguments and program defensively!  Rewrite your five functions so that each returns the correct answer when all arguments are valid, but returns NaN if any argument is not an integer in the appropriate range.

You may use the provided [template file](cards-template1b.js), which has extra tests checking the results of invalid arguments.

**Hint #3:** you can test whether an number _n_ is an integer with `(n%1 === 0)`.

**c)**
In the file with your solution to part **b**, extend the existing test suite: write 3 new assertions to test success cases and 3 more assertions to test failure cases.


_(Please note: Problem 5 is the most important one in this homework, because variations of it will recur in several later homeworks.  The cleaner your code is now, the easier it will be to modify later.)_


