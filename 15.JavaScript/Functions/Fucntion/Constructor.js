function Dog(name, breed, age, weight = 0) {
  this.dogname = name;
  this.dogBreed = breed;
  this.dogAge = age;
  this.dogWeight = weight;
  this.sound = function () {};
  this.eat = function () {};
  this.updateName = function (name) {
    this.dogname = name;
  };
}

let bullDog = new Dog('Sweety', 'Labra', 3, 15);
console.log(bullDog.dogname);
bullDog.updateName('');

console.log(bullDog.dogname);
