// 1.) compare two json()
let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person2" };
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

// 2.) display the all countries flags in console

let flags = fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    for (let index = 0; index < data.length; index++) {
      const element = data[index].flags;
      console.log(element);
    }
  })
  .catch((err) => console.log(err));

// 3.)print the all countries name,region,subregion,population

let data = fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      console.log("name :" + element.name.common);
      console.log("region :" + element.region);
      console.log("subregion :" + element.subregion);
      console.log("population :" + element.population);
    }
  })
  .catch((err) => console.log(err));
