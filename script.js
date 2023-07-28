// Write a “person” class to hold all the details.

class Person {
  constructor(name, age, qualification) {
    this.name = name;
    this.age = age;
    this.qualification = qualification;
  }
}
let name1 = new Person("wikky", "23", "software Engineer");
console.log(name1);

// write a class to calculate the uber price.

class Uber {
  constructor(kilometer, rate) {
    this.kilometer = kilometer;
    this.rate = rate;
  }
}
let calculate = new Uber(23, 14);
console.log("Total " + calculate.kilometer * calculate.rate + " Rs");
