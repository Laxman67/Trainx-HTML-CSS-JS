// ==========================================
// Primitive Data Types in JavaScript
// ==========================================

// 1. Number
let age = 20;
let percentage = 85.75;

console.log('Number (Integer):', age);
console.log('Number (Decimal):', percentage);

// ------------------------------------------

// 2. String
let studentName = 'Rahul';
let city = 'Vadodara';

console.log('String 1:', studentName);
console.log('String 2:', city);

// ------------------------------------------

// 3. Boolean
let isPassed = true;
let isLoggedIn = false;

console.log('Boolean 1:', isPassed);
console.log('Boolean 2:', isLoggedIn);

// ------------------------------------------

// 4. Undefined
let mobileNumber;

console.log('Undefined Value:', mobileNumber);
console.log('Type:', typeof mobileNumber);

// ------------------------------------------

// 5. Null
let address = null;

console.log('Null Value:', address);
console.log('Type of Null:', typeof address); // object (special behavior in JavaScript)

// ------------------------------------------

// 6. Symbol
let id1 = Symbol('student');
let id2 = Symbol('student');

console.log('Symbol 1:', id1);
console.log('Symbol 2:', id2);
console.log('Are both symbols equal?', id1 === id2);

// ------------------------------------------

// 7. NaN (Not-A-Number)

let result1 = 10 / 'ABC';
console.log("10 / 'ABC' =", result1);

let result2 = Math.sqrt(-1);
console.log('Square root of -1 =', result2);

// Checking NaN using isNaN()

console.log('isNaN(result1):', isNaN(result1));
console.log('isNaN(result2):', isNaN(result2));
console.log('isNaN(100):', isNaN(100));
console.log("isNaN('Hello'):", isNaN('Hello'));

// Number.NaN

console.log('Number.NaN =', Number.NaN);
console.log('Is Number.NaN really NaN?', isNaN(Number.NaN));

// ------------------------------------------

// Display the data type of every variable

console.log('\n===== Data Types =====');

console.log('age ->', typeof age);
console.log('studentName ->', typeof studentName);
console.log('isPassed ->', typeof isPassed);
console.log('mobileNumber ->', typeof mobileNumber);
console.log('address ->', typeof address); // object
console.log('id1 ->', typeof id1);
console.log('result1 ->', typeof result1);
