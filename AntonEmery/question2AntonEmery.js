/*
Rewrite each block below as the simplest equivalent you can discover. Your
equivalent should produce the same final conditions as the original code given
the same initial conditions. In each case, if there is an undeclared variable,
assume it has been declared earlier and set to an unknown value.
*/

/* a */

var i;
if ((n - Math.floor(n)) >= .5) {
   i = Math.ceil(n);
} else {
  i = Math.floor(n);
}

var i;
var x = Math.floor(5.5);
if ((5.5 - x) >= .5) {
   i = Math.ceil(5.5);
} else {
  i = x;
}

/* b */

var y, xIsFalse = (x? false : true);
if (xIsFalse)
   y = false;
else
   y = x;