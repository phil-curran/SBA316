class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
    // return is not needed because the new object is returned by default
  }
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  toString(animal = "Animal") {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${
      this.isAwake ? "is" : "is not"
    } awake, and ${this.isMoving ? "is" : "is not"} moving.`;
  }
}

class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 2, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Meow...");
  }
  toString() {
    return super.toString("Cat");
  }
}

class Human extends Animal {
  constructor(hair, name, age, location, occupation, isAwake, isMoving) {
    super(2, 2, isAwake, isMoving);
    this.hair = hair;
    this.name = name;
    this.age = age;
    this.location = location;
    this.occupation = occupation;
  }
  greet() {
    super.speak("Hello!");
  }
  toString() {
    return super.toString("Human");
  }
}

const cat1 = new Cat("Orange", true, false);
const human = new Human(
  "blond",
  "Phil",
  45,
  "Seattle",
  "unemployed",
  true,
  true
);

console.log(human);
console.log(human.speak());
