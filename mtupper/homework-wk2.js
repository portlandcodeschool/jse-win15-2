/**
 * Created by mtupper on 1/16/15.
 */

// Problem 1-a
function fractionString(n, d) {
    var i = (Math.floor(n/d)),
        n = (n % d),
        pf = i.toString() + " " + n.toString() + "/" + d.toString();

    return pf;
}

// Problem 1-b
function fractionString2(n, d) {
    var i = (Math.floor(n/d));
    var n = (n % d);

    if (i !== 0 && n !== 0) {
        pf = i.toString() + " " + n.toString() + "/" + d.toString();
    }
    if (i === 0) {
        pf = n.toString() + "/" + d.toString();
    }
    else {
        pf = i.toString();
    }

    return pf;
}