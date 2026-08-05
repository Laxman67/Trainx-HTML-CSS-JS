const students = [
  {
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    year: 1,
    course: 'BCA',
    phone: '9876543210',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 82 },
      { subject: 'HTML', marks: 91 },
      { subject: 'JavaScript', marks: 88 },
    ],
  },
  {
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    year: 2,
    course: 'BSc IT',
    phone: '9876543211',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 75 },
      { subject: 'HTML', marks: 89 },
      { subject: 'JavaScript', marks: 84 },
    ],
  },
  {
    name: 'Rahul Verma',
    email: 'rahul.verma@example.com',
    year: 3,
    course: 'B.Tech',
    phone: '9876543212',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 92 },
      { subject: 'HTML', marks: 87 },
      { subject: 'JavaScript', marks: 95 },
    ],
  },
  {
    name: 'Sneha Joshi',
    email: 'sneha.joshi@example.com',
    year: 4,
    course: 'B.E.',
    phone: '9876543213',
    isGraduated: true,
    examScore: [
      { subject: 'Java', marks: 85 },
      { subject: 'HTML', marks: 93 },
      { subject: 'JavaScript', marks: 90 },
    ],
  },
  {
    name: 'Karan Mehta',
    email: 'karan.mehta@example.com',
    year: 3,
    course: 'B.Com',
    phone: '9876543214',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 70 },
      { subject: 'HTML', marks: 78 },
      { subject: 'JavaScript', marks: 81 },
    ],
  },
  {
    name: 'Ananya Singh',
    email: 'ananya.singh@example.com',
    year: 4,
    course: 'BBA',
    phone: '9876543215',
    isGraduated: true,
    examScore: [
      { subject: 'Java', marks: 95 },
      { subject: 'HTML', marks: 96 },
      { subject: 'JavaScript', marks: 94 },
    ],
  },
  {
    name: 'Rohan Desai',
    email: 'rohan.desai@example.com',
    year: 2,
    course: 'BCA',
    phone: '9876543216',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 68 },
      { subject: 'HTML', marks: 74 },
      { subject: 'JavaScript', marks: 80 },
    ],
  },
  {
    name: 'Meera Nair',
    email: 'meera.nair@example.com',
    year: 1,
    course: 'BSc CS',
    phone: '9876543217',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 88 },
      { subject: 'HTML', marks: 85 },
      { subject: 'JavaScript', marks: 90 },
    ],
  },
  {
    name: 'Vikram Rao',
    email: 'vikram.rao@example.com',
    year: 4,
    course: 'MBA',
    phone: '9876543218',
    isGraduated: true,
    examScore: [
      { subject: 'Java', marks: 79 },
      { subject: 'HTML', marks: 82 },
      { subject: 'JavaScript', marks: 77 },
    ],
  },
  {
    name: 'Neha Kapoor',
    email: 'neha.kapoor@example.com',
    year: 2,
    course: 'B.Tech',
    phone: '9876543219',
    isGraduated: false,
    examScore: [
      { subject: 'Java', marks: 91 },
      { subject: 'HTML', marks: 88 },
      { subject: 'JavaScript', marks: 93 },
    ],
  },
];

const cart = [
  { name: 'Laptop', quantity: 1, price: 55000 },
  { name: 'Mouse', quantity: 2, price: 700 },
  { name: 'Keyboard', quantity: 1, price: 1500 },
  { name: 'Monitor', quantity: 2, price: 12000 },
  { name: 'Headphones', quantity: 1, price: 2500 },
  { name: 'USB Cable', quantity: 3, price: 250 },
  { name: 'Webcam', quantity: 1, price: 3200 },
  { name: 'External Hard Drive', quantity: 1, price: 4800 },
  { name: 'Laptop Stand', quantity: 2, price: 900 },
];

const markss = [10, 20, , [30, 40, 50], [30, [60, 70, 40]], 20, 50];

//Map():
//sort():
//Reduce():
// ForEach():
// find():
// filter():

// ===============QUESTIONS=========START

// 1. Write a Function named (BasicStudentDetails) that create a new Arrays of Object {name,email,phone}
function BasicStudentDetails(value) {
  let { name, email, phone, isGraduated } = value;
  return {
    name,
    email,
    phone,
    isGraduated,
  };
}

//TODO  Desctructure the object
let mofifiedStudents = students.map((student) => BasicStudentDetails(student));

// console.log(mofifiedStudents);

const marks = [95, 78, 90, 78, 59];
// 2. Write a program to get  the Total Marks using reduce() method and then Get the percentage

function getPercentage(studentsArray) {
  const required = studentsArray.length * 100;

  let total = studentsArray.reduce((acc, curr) => acc + curr, 0);
  const result = (total / required) * 100;
  return `Percentage is : ${result}%`;
}

// ====== What is Template Literal ====

// Template literals, introduced in ES6 (ECMAScript 2015), are a modern way to work with strings in JavaScript.

// **  template literals use backticks (`), to embed expressions, variables and strings

//=======TEMPLATE=====

// 3. create a program that send email (JUST SIMULATION) and greet every user with name, email, Phone, message , subject

// Template For Mail

// {
//     name: 'Aarav Sharma',
//     email: 'aarav.sharma@example.com',
//     year: 1,
//     course: 'BCA',
//     phone: '9876543210',
//     isGraduated: false,
//     examScore: [
//       { subject: 'Java', marks: 82 },
//       { subject: 'HTML', marks: 91 },
//       { subject: 'JavaScript', marks: 88 },
//     ],
//   },

// To      : {aarav.sharma@example.com}
// Subject : Welcome to {JavaScript} Course

// Hello {Aarav Sharm},

// We are happy to have you in our {JavaScript} course.
// We hope you enjoy learning with us.
// If you have any questions, feel free to contact us.

// Phone : {9876543210}

// Regards,
// Parul University

// 4. Return the highest examscore from students Array >>>
// ======Question 4 =========
//  examScore: [
//       { subject: 'Java', marks: 82 }, 82+9+88= >179
//       { subject: 'HTML', marks: 91 },
//       { subject: 'JavaScript', marks: 88 },
//  ],

// console.log(
//   students.map((student) =>
//     student.examScore.reduce((acc, curr) => acc + curr.marks, 0)
//   )
// );
// ======Question 4 END
//
//  =========

// 5 Return all the student who are in BCA Course  >>> create a function that accepts CourseName and return result
// 6. Calculate the Total Price of the Products in Cart

// EXPECTED OUTPUT : Total Price : Rs. .....

// 7. Example [13, 45, 67, 21, 10]
// 7. EXPECTED OUTPUT :  10_X_13_X_21_X_45_X_67

// ===============QUESTIONS=========END
//  TODO : Desctructure
let arrayOfMarks = students.map((student) =>
  student.examScore.reduce((acc, { marks }) => marks + acc, 0)
);

let sortedArray = arrayOfMarks.sort((a, b) => b - a);
// console.log(arrayOfMarks);
// console.log(`Highest Marks : ${sortedArray[0]}`);

/**
 * This Function is used to create template based on the current Object
 * @param {*} students
 * @returns string
 */

// TODO : Destructure the object
function sendEmail(student) {
  const { email, course, name, phone } = student;
  let template = `
To      : ${email}
Subject : Welcome to ${course} Course

Hello ${name},

We are happy to have you in our ${course} course.
We hope you enjoy learning with us.
If you have any questions, feel free to contact us.

Phone : ${phone}

Regards,
Parul University
`;

  return template;
}

students.forEach((student) => {
  console.log(sendEmail(student));
});

let cars = ['Maruti', 'Benz', 'Breeza', 'Etios', 'Dzire'];
const Smarks = [10, 20, , [30, 40, 50], [30, [60, 70, 40]], 20, 50];

let newArr = Smarks.flat(2);

function outer() {
  let name = 'John'; // Outer function variable
  function inner() {
    console.log('Hello ' + name);
  }
  inner(); // Output: "Hello John"
}
// outer();
