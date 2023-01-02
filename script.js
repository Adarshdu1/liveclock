/*
    JavaScript Display Possibilities:
    1. innerHTML
    2. document.write() // for testing
    3. window.alert()
    4. console.log() // most importantly used for debugging
*/

// var para = document.getElementById("para");
// para.innerHTML = "Paragraph changed.";

// document.write("Content added");
// Using document.write() after an HTML document is loaded, will delete all existing HTML.
// eg.

// var btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   document.write(2 ** 3);
// });

// alert("This is a alert dialog box");

// console.log("Hellooooo. console here");

// for printing the content of the current window
// window.print();

// var btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   print();
// });

/*
-> 4 ways to declare a JS variables:
1. var // used from 1995 to 2015
2. let // if think it gonna change then var
3. const // always declare const 
4. without keyword

Note: if we re-declare a JS variable, it will not lose its value. (its for var keyword only)

// when to use JS const
Use const when you declare:
: a new array
: a new object
: a new function
: a new regexp
// you can't reassign any value to const variables
*/

/*
   The ??= Operator
   : if the first value is undefined or null, the second value is assigned.
   let x = 100
   x ??= 5
   // then x = 100
   else if let x
   x ??= 5 // then x= 5
*/

/*
    JS has 8 datatypes:
    1. String
    2. Number
    3. Bigint // JS20
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol
    8. Object
        1. Object
        2. Array
        3. Date
*/
// document.write(15 + "fifteen");  consider number as string okay...
// left to right evalutaion
// exponential
// let y = 12e5
// JS number are always one type
// Double (64 bits)

// functions
// const sum = function (a, b) {
//   return a + b;
// };
// objects

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   eyeColor: "blue",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const sum = (a, b) => a + b;
// let add = sum;
// console.log(add(3, 4));
/*
    JS Events
    : You can use the event on the HTML tags.
    event = 'some JS'
*/
/*
JS Strings
-> String.length
-> Escape sequence
-> breaking text using \
*/
// JS methods

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// length
// console.log(text.length);
// extracting parts
// slice(start,end)
// substring(start,end)
// substr(start,length)
// console.log(text.slice(0, 7)); // last exclusive
//console.log(text.substring(0, 7)); // same as slice
// difference between slice and substring is that, if start,end values less than 0, are treated as 0 in substring()
//console.log(text.substr(0, 7)); // deprecated
// replace() text
// console.log(text.replace("ABC", "XYZ"));
/*
Note: The replace() method does not change the string originally
The replace() method returns a new string
The replace() method replaces only first match
If you want to replace all matches, use a regex with the /g flag , for case insensitive, use /i
eg. replace(/MICROSOFT/ig)
// although from 2021, we have replaceAll() methods
*/
// upper and lower case
// toUpperCase()
// toLowerCase()
// console.log(text.toLowerCase());
// concat

// let text1 = "        Hello";
// let text2 = "World";

//console.log(text1.concat(" ", text2));
// you can concat multiple at the single time
// trim()
// console.log(text1.trim());
// trimStart()
// trimEnd()
// padStart()
// padEnd()
// charAt(index)
// charCodeAt(index) // return Unicode
// if index not found, [] returns undefine, charAt() returns empty string
// convert a string to an array
// split()
// you can use the separator parameter
// eg. split(',')

// String search
// indexOf(string) -> first occurence
// lastIndexOf(string) -> last occurence
// search(string) -> return position (you can use regex)
// match()
// matchAll()
// includes()
// startsWith()
// endsWith()
// for using the variable in the string
// use the back-tics syntax that the quotes
// ${varName} for variable accessing
// you can add HTML templates using this

// NaN - Not a Number
// eg. x = 100 / 'a'
// isNaN() to check whether it's a number or not

// let number = +/-Infinity ): outside the largest possible number
// hexadecimal let x = 0xFF;
// to convert the number to string
// toString(base) // base 8 for octal,16 for hexa,10 for decimal, 2 for binary

// to create a bigint
// append n at the end of integer
// of call BigInt(number) -> don't have fixed width
// octal 0o
// binary 0b
// MAX_SAFE_INTEGER
// MIN_SAFE_INTEGER
// Number.isInteger(number)
// Number.isSafeInteger(Number)

// number methods
// toString()
// toExponential()
// toFixed()
// toPrecision()
// valueOf() -> object to number
// Number()
// parseFloat()
// parseInt()
// Number() can convert a date to a number from 1.1.1970

// Number Properties
// Number.property
// EPSILON
// MAX_VALUE
// MIN_VALUE
// POSITIVE_INFINITY
// NEGATIVE_INFINITY
// NaN

// arrays
// const cars = ["Saab", "Volvo", "BMW"];
// length
// sort()
// for accessing last, you can use -1
// Array.forEach()

// cars.forEach((value, key) => {
//   console.log(key, value);
// });

// adding element
// push()
// to check array
// Array.isArray(arrName)
// arrName instanceOf Array

// array methods
// toString()
// join(separator)
// pop()
// push(value)
// shift() -> from first
// unshift(value) -> at first
// delete array_element
// arr.concat(arrName)
// splice(idx,how_many_delete,'elements') -> returns the deleted elements array
// slice() -> doesn't remove from the original array

// sort() -> for string
// reverse()
// to sort the numbered array
// arr.sort(function(a,b){return a - b})
// Math.random()
// Math.max.apply(null,arr)
// similarly min

// Array.map((value,index,array)=>{})
// used to create a new array by performing a function on each array element
// Array.filter((value,index,array)=>{})
// creates a new array with array elements that passes a test
// Array.reduce((total,value,index,array)=>{})
// return a single value after producing from all the array element
// reduceRight() -> right to left
// Array.every(()=>{})
// for all the values pass a test
// true or false
// Array.some()
// for any one case
// indexOf()
// lastIndexOf()
// find(()=>{})
// returns the value of first array element that passes a test function
// findIndex()
// Array.from()
// create a array from string
// Array.keys()
// Array.entries()
// for (let x of f)return x;
// key value pair
// includes()

//------------------------------------------------
// JS Date Objects
//------------------------------------------------
const date = new Date();
// console.log(date.toDateString());
// console.log(date.toUTCString());
// console.log(date.toISOString());
/*
9 ways to create a date object
1. new Date()
2. new Date(date string)
3. new date(year,month)
4. new date(year,month,day)
5. new date(year,month,day,hours)
6. new date(year,month,day,hours,minutes)
7. new date(year,month,day,hours,minutes,seconds)
8. new date(year,month,day,hours,minutes,seconds,ms)
9. new date(milliseconds)
*/

// JS counts month from 0 to 11
// day count 0 to 6 - 0 to sunday
// date 1 to 31
// hours 0 to 23
// minutes 0 to 59
// console.log(Date.now());

let time = document.getElementById("myTime");

const timeNow = function () {
  let date = new Date();
  return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
};
setInterval(() => {
  time.innerHTML = timeNow();
}, 1000);
