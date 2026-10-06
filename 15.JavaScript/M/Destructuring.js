// Edge Case

const user = {
  name: 'John',
  age: 30,
  email: 'user@gmail.com',
  phone: '787878787',
};
const student = {
  rollNo: 90,
  department: 'B.Tech',
};

let obj = {
  ...user,
  ...student,
  age: 89,
  name: 'Harry',
  username: 'Laksh',
};

const {
  age: userAge,
  username: name,
  department,
} = { ...obj, department: 'AIML' };

console.log(userAge); // 89
console.log(name); // Laksh
console.log(department); //AIML
