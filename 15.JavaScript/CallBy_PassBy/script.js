let names = ['Vikas', 'shashwat', 'Sahil Mishra', 'Ambika'];
let student = {
  name: 'Vikas',
  age: 12,
  address: 'Gujrat',
};

// Call By Value
console.log(`Before Func...  ${student.address}`);

function display(studentRecords) {
  studentRecords.address = 'wagodia';
  console.log(
    `After Updating inside the Function...  ${studentRecords.address}`
  ); //wagodia
}

display(student);

console.log(`after Func...  ${student.address}`);

//  &&  Call By Reference
