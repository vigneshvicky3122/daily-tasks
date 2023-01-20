let restCounters = new XMLHttpRequest();
restCounters.open("GET", "https://restcountries.com/v3.1/all");
restCounters.onload = () => {
  let result = JSON.parse(restCounters.response);

  // a.)Get all the countries from the Asia continent /region using the Filter function

  function findTheCountries(input, query) {
    return input.filter((findElem) =>
      findElem.region.toLowerCase().includes(query.toLowerCase())
    );
  }
  console.log(findTheCountries(result, "Asia"));

  // b.) Get all the countries with a population of less than 2 lakhs using Filter function
  function findThePopulation(input) {
    return input.filter((findElem) => findElem.population < 200000);
  }
  console.log(findThePopulation(result));

  // c.) Print the following details name, capital, flag using forEach function
  function findTheDetails(input) {
    input.forEach((element) => {
      console.log("country name :" + element.name.common);
      console.log("capital :" + element.capital);
      console.log("flag :" + element.flags.png);
    });
  }
  findTheDetails(result);

  // d.) Print the total population of countries using reduce function
  function ReducePopulation(input) {
    let results = [];
    input.map((data) => results.push(data.population));
    return results.reduce((acc, cur) => {
      return acc + cur;
    });
  }
  console.log("Total populations : " + ReducePopulation(result));

  // e.) Print the country which uses US Dollars as currency.
  function findTheDollars(input, query) {
    return input
      .filter((element) => {
        return element.currencies;
      })
      .map((data) => {
        return data.currencies.USD;
      })
      .filter((result) => {
        return result;
      })
      .map((result) => {
        return result.name;
      });
  }
  console.log(findTheDollars(result, "USD"));
};

restCounters.onerror = function () {
  console.error();
};
restCounters.send();
