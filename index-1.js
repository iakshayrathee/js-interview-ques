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

/* palindrome or not */

function palindrome(str) {
  var reversed = str.split("").reverse().join("");
  return reversed === str;
}

console.log(palindrome("racecar"));

/* return passed str with letters in alphabetical order */

function stringAlpha(str) {
  return str.split("").sort().join("");
}
console.log(stringAlpha("akshay"));

/* convert first word capital in str */

function capitalize(str) {
  var ans = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return ans.join(" ");
}

console.log(capitalize("hello every one this is a ques"));

/* get no of occurance */

function occurance(str) {
  var occurances = {};
  str.split("").forEach(function (element) {
    if (occurances.hasOwnProperty(element) === false) {
      occurances[element] = 1;
    } else occurances[element]++;
  });
  return occurances;
}
console.log(occurance("hello"));

/*loop an array and add members of it */

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = 0;
arr.forEach(function (elem) {
  sum = sum + elem;
});

console.log(sum);

/*in an array of no and str only add those which are not str */
var arrNum = [1, 2, "asdasd", 4, "rty", 5, 345];
var sum = 0;

arrNum.forEach(function (ele) {
  if (typeof ele === "number") {
    sum = sum + ele;
  }
});
console.log(sum);

/* remove gender != male*/
var arrObj = [
  { name: "harsh", gender: "male" },
  { name: "harshita", gender: "female" },
  { name: "ram", gender: "male" },
  { name: "ankita", gender: "female" },
  { name: "shruti", gender: "female" },
];

// var newarr = arr.filter(function (ele) {
//   return ele.gender === "male";
// });

var count = 0;
arrObj.forEach(function (ele) {
  if (ele.gender !== "male") count++;
});
//cannot break forEach loop so we use for loop
for (var j = 0; j <= count; j++) {
  for (var i = 0; i < arrObj.length; i++) {
    if (arrObj[i].gender !== "male") {
      arrObj.splice(i, 1);
    }
  }
}

console.log(arrObj);

/*clone array */

function cloneArr(arr) {
  return [...arr];
}
var ansArr = cloneArr([1, 2, 3, 4, 5]);
console.log(ansArr);

/*tell type */
function typeTeller(elem) {
  return typeof elem;
}

console.log(typeTeller([]));
console.log(typeTeller(12));
console.log(typeTeller("str"));

/* get first element of array. passing 'n' will return first 'n' elements*/

function retrieve(arr, n = 1) {
  if (n <= arr.length) {
    for (var i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else console.log("not this much elements");
}

retrieve([1, 2, 3, 4, 5, 6, 7, 8]);
retrieve([1, 2, 3, 4, 5, 6, 7, 8], 5);
retrieve([1, 2, 3, 4, 5], 6);

/* get last element of array. passing 'n' will return last 'n' elements*/

function retrieveLast(arr, n = 1) {
  if (n <= arr.length) {
    for (var i = 0; i < n; i++) {
      console.log(arr[arr.length - 1 - i]);
    }
  } else console.log("not this much elements");
}

retrieveLast([1, 2, 3, 4, 5, 6, 7, 8]);
retrieveLast([1, 2, 3, 4, 5, 6, 7, 8], 5);
retrieveLast([1, 2, 3, 4, 5], 6);

/*find most frq element of array */
function freq(arr) {
  var freq = {};
  arr.forEach(function (elem) {
    if (freq.hasOwnProperty(elem)) freq[elem]++;
    else freq[elem] = 1;
  });
  var ans = Object.keys(freq).reduce(function (acc, num) {
    return freq[acc] > freq[num] ? acc : num;
  });
  console.log(ans);
}
freq([1, 1, 1, 1, 2, 2, 2, 4, 4, 5, 5, 6, 7, 7, 8, 8]);
