const person = {
  name: 'Virat',
  age: 19,
  address: {
    city: 'Wagodia',
    pincode: 134567,
  },
};
for (let key in person) {
  console.log(`${key}:${person[key]}`);
}

// function iterate(obj) {
//   for (const [key, value] of Object.entries(obj)) {
//     if (typeof value === 'object' && !Array.isArray(value)) {
//       console.log(`Entering nested object: ${key}`);
//       iterate(value); // Recursively call for nested objects
//     } else {
//       console.log(key, value); // Output key-value pair
//     }
//   }
// }

// iterate(user);
