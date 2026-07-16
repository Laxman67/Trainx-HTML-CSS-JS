//Every objects like array , string , object are inherited by "Object"

// console.log(String.prototype.includes.call(str, 'm'));
// console.log(Student.prototype.getName.call(laksh));

const animal = {
  eats: true,
};

const dog = {
  bark() {
    console.log('Woof!');
  },
};

Object.setPrototypeOf(dog, animal);

console.log(Object.getPrototypeOf(dog));
