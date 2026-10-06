const person = {
  name: 'Virat',
  age: 19,
  address: {
    city: 'Wagodia',
    pincode: 134567,
  },
};

let stringifiedObject = JSON.stringify(person);
let parsedObject = JSON.parse(stringifiedObject);
console.log(typeof parsedObject);
