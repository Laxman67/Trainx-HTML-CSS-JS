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
const marks = [10, 20, 30, 20, 50];
console.log(marks.filter((el) => el === 20));

//Map():
//sort():
//Reduce():
// ForEach():
// find():
// filter():

// ===============QUESTIONS=========START

// 1. Write a Function named (BasicStudentDetails) that create a new Arrays of Object {name,email,phone}
// 2. Write a program to get  the Total Price using reduce() method and then Get the percentage

// ====== What is Template Literal ====

// Template literals, introduced in ES6 (ECMAScript 2015), are a modern way to work with strings in JavaScript.

// **  template literals use backticks (`), to embed expressions, variables and strings

//=======TEMPLATE=====

// 3. create a program that send email (JUST SIMULATION) and greet every user with name, email, Phone, message , subject

// Template For Mail
// To      : {aarav.sharma@example.com}
// Subject : Welcome to {JavaScript} Course

// Hello Aarav Sharma,

// We are happy to have you in our {JavaScript} course.
// We hope you enjoy learning with us.
// If you have any questions, feel free to contact us.

// Phone : {9876543210}

// Regards,
// Parul University

// 4. Return the highest examscore from students Array >>>

// 5 Return all the student who are in BCA Course  >>> create a function that accepts CourseName and return result

/*
Welcome to ABC College!

We hope you have a wonderful learning experience in the ${student.course} program.

Best Regards,
ABC College`;
 */

// ===============QUESTIONS=========END

function sendEmail(student) {
  let template = `
  To      : ${student.email}
Subject : Welcome to ${student.course} Course

Hello Aarav Sharma,

We are happy to have you in our ${student.course} course.
We hope you enjoy learning with us.
If you have any questions, feel free to contact us.

Phone : ${student.phone}

Regards,
Parul University
  `;

  return template;
}

// students.forEach((student) => console.log(sendEmail(student)));

function* sentMailToStudent(students) {
  yield console.log(sendEmail(students[0]));
  yield console.log(sendEmail(students[1]));
  yield console.log(sendEmail(students[2]));
  yield console.log(sendEmail(students[3]));
  yield console.log(sendEmail(students[4]));
  yield console.log(sendEmail(students[5]));
}

// let sendEmails = sentMailToStudent(students);
// sendEmails.next();
// sendEmails.next();
// sendEmails.next();
// sendEmails.next();
