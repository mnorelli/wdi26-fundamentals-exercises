var i = 20;
var result;
for (x = 1; x <= i ; x += 1) {
if ((x % 3 === 0) && (x % 5 === 0)) {
    result = "fizzbuzz";
} else if (x % 3 === 0) {
    result = "fizz";
} else if (x % 5 === 0) {
    result = "buzz"
} else result = x;
console.log(result);
}