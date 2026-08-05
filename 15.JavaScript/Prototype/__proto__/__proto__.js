// 1. ".__proto__" is a property in 'object' that point to
//  inherited properties and methods from object,
//  means if properties and methods are not available
// then try to access from inherited object
// 2 . __proto__ works in Object() to access , modify or update inherited properties

// let vikas = {
//   name: 'Vikas',
//   age: 29,
//   email: 'vikas.trainer@gmail.com',

let str = 'laksh';
Object().__proto__.reverse = function () {
  console.log(`The reversed is ${this.split('').reverse('').join('')}`);
};
str;
console.log(Object().__proto__);

String.prototype.transform = function (seperator) {
  console.log(`The reversed is ${this.split('').reverse('').join(seperator)}`);
};
console.log(String.prototype);

str.reverse();
str.transform('#');
// console.log(String.prototype);
