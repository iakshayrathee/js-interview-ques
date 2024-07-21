/* 1)Write a func findLongestWord that takes a string as input and returns the longest word in the string.
If there are multiple longest word, return the first one encountered.
 */

const findLongestWord = (str) => {
  if (str.trim().length === 0) return false;

  //split returns array
  words = str.split(" ");
  //sorts on unicode in ascending order
  words = words.sort((a, b) => a.length - b.length);
  //(a,b) is comparison function

  //b.len - a.len return words[0]

  return words.at(-1);
  /* return words.reduce((accum,curWord) =>(curWord.length > accum.length ? curWord : accum),
  "" ) */
};

console.log(findLongestWord("Hello This is a js interview question"));

/********************************************************************************/

/* 2)Convert input str where each word is capitalized and concatenated together without white space
return false if str>280 or str = "   "
 */

const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) return false;

  str = str.split(" ");
  str = str.map(
    (element) => element.replace(element[0], element[0].toUpperCase())
    //element.charAt(0).toUpperCase() + element.slice(1)
  );
  return str.join("");
};

console.log(generateHash("this is a js question"));

/********************************************************************************/

/*3)count character*/

const countChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();
  totalCount = word.split("").reduce((accum, curChar) => {
    if (curChar === char) accum++;
    return accum;
  }, 0);
  return totalCount;
};
//single value access -> use reduce method

console.log(countChar("MissIssippi", "I"));

/********************************************************************************/
/*4)return type of triangle equilateral,isosceles or scalene
 */
const checkTriangle = (a, b, c) => {
  if (a === b && b === c) return "equilateral";
  if (a === b || b === c || a === c) return "isosceles";
  return "scalene";
};
console.log(checkTriangle(2, 4, 3));

/********************************************************************************/
/*5)sort an array  return new array don't use sort() func*/

const sortArray = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(sortArray([5, 3, 1, 8]));

/********************************************************************************/

/* 6)given str palindrome or not
 */
const isPalindrome = (str) => {
  str = str.toLowerCase().replace(/\W/g, "");
  //\W matches non-word char regular expression
  let reverse = str.split("").reverse().join("");
  return reverse === str ? true : false;
};

console.log(isPalindrome("wow"));

/********************************************************************************/

/*7)Find Max no in arr
 */

const findMax = (arr) => {
  return Math.max(...arr);
};

console.log(findMax([1, 5, 3, 8, 9]));

/********************************************************************************/

/*8)find factorial of non negative f(0) = 1
 */
const factorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

console.log(factorial(5));

/********************************************************************************/
/*9) calculate avg of nos in array
 */

const calAvg = (arr) => {
  const total = arr.reduce((accum, curElem) => accum + curElem, 0);
  return total / arr.length;
};

console.log(calAvg([1, 2, 3, 4, 5]));

/********************************************************************************/

/*10)equal array same elements same order*/

const arrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, index) => val === arr2[index]);
};

console.log(arrayEqual([1, 8, 3], [1, 2, 3]));

/********************************************************************************/

/*11)take no as input and return sum of digit*/

const sumOfDigits = (num) => {
  let arr = Array.from(String(num), Number);
  return arr.reduce((accum, curval) => (accum += curval), 0);
};

console.log(sumOfDigits(123));

/********************************************************************************/

/*12)take arr of int as input and removes duplicate elements*/

const duplicate = (arr) => {
  let newArr = [...new Set(arr)];
  return newArr;
};

console.log(duplicate([1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 6]));

/********************************************************************************/

/*13)return count of vowels in string*/

const countVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  let count = 0;
  for (let char of arr) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("this is a quick brown fox"));

/********************************************************************************/

/*14)take int as input and return true if num is power of two*/

const power = (num) => {
  let op = false;
  for (let i = 1; i < num; i++) {
    if (2 ** i === num) op = true;
  }
  return op;
};

console.log(power(32));

/********************************************************************************/

/*15)return sum of square of elements of array*/

const sum = (arr) => {
  return arr.reduce((accum, curElem) => (accum = accum + curElem * curElem), 0);
  /* let sum = 0
  for(let elem of arr){
  sum = sum + elem*elem}
  */
};

console.log(sum([1, 2, 3]));

/********************************************************************************/

/*16)find min val in arr*/

const min = (arr) => {
  return Math.min(...arr);
};

console.log(min([1, 2, 3, 4, -5, 6, 7]));
