class Animal {
  constructor(name, color, numLegs) {
    this.name = name;
    this.color = color;
    this.numLegs = numLegs;
  }
  run() {
    return "";
  }
  speak() {
    return "";
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name.color.numLegs;
  }
}

class Dog extends Animal {
  constructor(name, color, numLegs) {
    super(name, color, numLegs);
  }
  run() {
    console.log(this.name + " is running!");
  }
  speak() {
    console.log("Woof-woof!");
  }
}

class Cat extends Animal {
  constructor(name, color, numLegs) {
    super(name, color, numLegs);
  }
  run() {
    console.log(this.name + " is running!");
  }
  speak() {
    console.log("Murrr-murrr!");
  }
}

class Kangaroo extends Animal {
  constructor(name, color, numLegs) {
    super(name, color, numLegs);
  }
  run() {
    console.log(this.name + " is running!");
  }
}

class Mouse extends Animal {
  constructor(name, color, numLegs) {
    super(name, color, numLegs);
  }
  run() {
    console.log(this.name + " is running!");
  }
  speak() {
    console.log("Mi-mi-mi!");
  }
}

let dogRex = new Dog("Rex", "black", 4);
console.log(dogRex);
dogRex.run();
dogRex.speak();

let catTom = new Cat("Tom", "grey", 4);
console.log(catTom);
catTom.run();
catTom.speak();

let kangarooJack = new Kangaroo("Jack", "redhead", 2);
console.log(kangarooJack);
kangarooJack.run();

let mouseJerry = new Mouse("Jerry", "grey", 4);
console.log(mouseJerry);
mouseJerry.run();
mouseJerry.speak();
