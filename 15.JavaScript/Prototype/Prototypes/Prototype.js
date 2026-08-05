function hello() {}

class Student {
  constructor(name = 'Vishal', age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  displayStudent() {
    console.log('Student Class Display ');
  }
  StudentClass() {
    console.log('StudentClass');
  }
}

class GoodStudent extends Student {
  constructor() {
    super();
  }

  displayGoodStudent() {
    console.log('GoodStudent Display');
  }
  GoodStudentClass() {
    console.log('GoodStudentClass');
  }
}

class TopStudent extends GoodStudent {
  constructor() {
    super();
  }
  displayTopStudent() {
    console.log('Top Student Display');
  }
  TopStudentClass() {
    console.log('Top StudentClass');
  }
}

function normalFucntion() {
  let a = a;
  console.log('This is a Normal fucntion');
}

console.log(TopStudent.prototype);

// In class ==> ".prototype" that point to itself (properties and methods) and other properties are available by inheritace
// 1. prototype returns an object so that we can use to access properties and methods

// Each Class Inherits properties from its Parent Class

// console.log(`Normal Function :`, normalFucntion.prototype);
// console.log(`GoodStudent : `, GoodStudent.prototype);
// console.log(`TopStudent : `, TopStudent.prototype);

// Wrapper Classes
