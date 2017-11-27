

/*
VARIABLES
- Variables in javascript are like x or y in your math class. They're place holders for values that keep changing.
  The only difference between the variables in javascript and math class is that javascript variable's can store 
  words, functions, objects, cats as well as numbers. Basically anything you can think of you can store in 
  a variable. 

STRINGS
- A string is a list of characters or just one character. Anything you put inside quotation marks is a string.
  It's called a string because it's a "string of variables. Also even numbers can be strings, just as long
  as they're inside quotation marks. "123456"


FUNCTION
- Functions are actions you want your program to do. They can take variables as their input and return a value.
  The value that's returned depends on what you have the function do. Even if you don't tell your function
  to return a value it will still return a undefined value. 


IF statements
- An if statements is like the branches of a tree. First you start from the bottom of the tree then the
  higher you go the more the branches begin to go in different directions. So if you're climbing 
  the tree you would be doing IF statements in your head. Ex. IF (i go on the weaker branch) then {It will break}


BOOLEAN values(true or false)
- Boolean values are very much like yes or no questions. It's a choice between this or that. IF statements 
  and boolean values are used hand in hand. They are the main tools for making decisions in your code.
  Ex. IF(youFallOfTheTree is true) then {you break a leg}, if false then you keep climbing the tree.
  */ 


//Do not change any of the function names

function multiplyByTen(num) {
  return num * 10;
  // return num after multiplying it by ten
  // code here
}

function subtractFive(num) {
  return num - 5;
  // return num after subtracting five
  // code here
}

function areSameLength(str1, str2) {
  if(str1.length === str2.length)
    return true;
  return false;
  // return true if the two strings have the same length
  // otherwise return false
  // code here
}

function areEqual(x, y) {
  if(x === y)
    return true;
  return false;
  // return true if x and y are the same
  // otherwise return false
  // code here
}

function lessThanNinety(num) {
  if(num < 90)
    return true;
  return false;
  // return true if num is less than ninety
  // otherwise return false
  // code here
}

function greaterThanFifty(num) {
  if (num > 50)
    return true;
  return false;
  // return true if num is greater than fifty
  // otherwise return false
  // code here
}

function add(x, y) {
  return x + y;
  // add x and y together and return the value
  // code here
}

function subtract(x, y) {
  return x-y;
  // subtract y from x and return the value
  // code here
}

function divide(x, y) {
  return x / y;
  // divide x by y and return the value
  // code here
}

function multiply(x, y) {
  return x * y;
  // multiply x by y and return the value
  // code here
}

function getRemainder(x, y) {
  return x % y;
  // return the remainder from dividing x by y
  // code here
}

function isEven(num) {
  if (num % 2 === 0)
    return true;
  return false;
  // return true if num is even
  // otherwise return false
  // code here
}

function isOdd(num) {
  return (!isEven(num));
  // return true if num is false
  // otherwise return false
  // code here
}

function square(num) {
  return num * num;
  // square num and return the new value
  // code here
}

function cube(num) {
  return Math.pow(num, 3);
  // cube num and return the new value
  // code here
}

function raiseToPower(num, exponent) {
  return Math.pow(num, exponent);
  // raise num to whatever power is passed in as exponent
  // code here
}

function roundNumber(num) {
  return Math.round(num);
  // round num and return it
  // code here
}

function roundUp(num) {
  return Math.ceil(num);
  // round num up and return it
  // code here
}

function addExclamationPoint(str) {
  return str + '!';
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
}

function combineNames(firstName, lastName) {
  return firstName + ' ' + lastName;
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
}

function getGreeting(name) {
  return 'Hello ' + name + '!';
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
}

// If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  return length * width;
  // return the area of the rectangle by using length and width
  // code here
}

function getTriangleArea(base, height) {
  return base * height * 0.5;
  // return the area of the triangle by using base and height
  // code here
}

function getCircleArea(radius) {
  return Math.round(3.14 * square(radius));
  // return the rounded area of the circle given the radius
  // code here
}

function getRectangularPrismVolume(length, width, height) {
  
  return length * width * height;
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
