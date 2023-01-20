// 1.) compare two json()
let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person2" };
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

// 2.) display the all countries flags in console

let flags = new XMLHttpRequest();
flags.open("GET", "https://restcountries.com/v3.1/all");
flags.onload = function () {
  let result = JSON.parse(flags.response);
  for (let index = 0; index < result.length; index++) {
    const element = result[index];
    console.log(element.flags);
  }
};
flags.onerror = function () {
  console.error();
};
flags.send();

// 3.)print the all countries name,region,subregion,population

let data = new XMLHttpRequest();
data.open("GET", "https://restcountries.com/v3.1/all");
data.onload = function () {
  let result = JSON.parse(data.response);
  for (let index = 0; index < result.length; index++) {
    const element = result[index];
    console.log("name :" + element.name.common);
    console.log("region :" + element.region);
    console.log("subregion :" + element.subregion);
    console.log("population :" + element.population);
  }
};
data.onerror = function () {
  console.error();
};
data.send();
