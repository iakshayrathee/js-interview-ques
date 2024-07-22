/*reverse each word of a string */

var str = "hello this is a js interview ques";

var reverse = str.split(" ").map(function (word) {
  return word.split("").reverse().join("");
});

console.log(reverse.join(" "));

/*object check array or not */

function checkArray(elem) {
  return Array.isArray(elem);
}
console.log(checkArray([]));
console.log(checkArray({}));

/*empty an array no loop for loop no reset originial array */

var arr = [1, 2, 3, 4, 5, 6];
arr.length = 0;
console.log(arr);

/*check no is integer */

//in-built -> Number.isInteger()
var a = 14.5;

if (a % 1 === 0) console.log("integer");
else console.log("not integer");

/*duplicate array */

function duplicate(arr) {
  return arr.concat(arr);
}
console.log(duplicate([1, 2, 3, 4, 5, 6]));

/*reverse a number */

function reverseNo(num) {
  // return Number(num.toString().split("").reverse().join(""));
  var rev = 0;
  while (num > 0) {
    var rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log(reverseNo(12053));
