let form = document.createElement("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit(event);
});
document.body.append(form);
let div = document.createElement("div");
div.setAttribute("class", "form col");
form.append(div);
let input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("name", "fname");
input1.setAttribute("class", "form-control");
input1.setAttribute("placeholder", "First name");

div.append(input1);
let input2 = document.createElement("input");
input2.setAttribute("type", "text");
input2.setAttribute("name", "lname");
input2.setAttribute("class", "form-control");
input2.setAttribute("placeholder", "Last name");

div.append(input2);

let select1 = document.createElement("select");
select1.setAttribute("class", "form-select");
select1.setAttribute("name", "gender");
select1.setAttribute("aria-label", "Default select example");
div.append(select1);

let option = document.createElement("option");
option.setAttribute("selected", "selected");
option.innerHTML = "Select your gender";
select1.append(option);
let option1 = document.createElement("option");
option1.setAttribute("value", "Male");
option1.innerHTML = "Male";
select1.append(option1);
let option2 = document.createElement("option");
option2.setAttribute("value", "Female");
option2.innerHTML = "Female";
select1.append(option2);
let option3 = document.createElement("option");
option3.setAttribute("value", "Transgender");
option3.innerHTML = "Transgender";
select1.append(option3);

let input3 = document.createElement("input");
input3.setAttribute("type", "text");
input3.setAttribute("name", "pin_code");
input3.setAttribute("class", "form-control");
input3.setAttribute("placeholder", "Pin code");

div.append(input3);

let textArea1 = document.createElement("textarea");
textArea1.setAttribute("class", "form-control");
textArea1.setAttribute("name", "address");
textArea1.setAttribute("placeholder", "Address");

div.append(textArea1);

let input4 = document.createElement("input");
input4.setAttribute("type", "text");
input4.setAttribute("name", "state");
input4.setAttribute("class", "form-control");
input4.setAttribute("placeholder", "State");

div.append(input4);

let input5 = document.createElement("input");
input5.setAttribute("type", "text");
input5.setAttribute("name", "country");
input5.setAttribute("class", "form-control");
input5.setAttribute("placeholder", "Country Name");

div.append(input5);
let FoodLabel = document.createElement("label");
FoodLabel.innerHTML = "Select your any 2 favorite foods : ";
div.append(FoodLabel);
let brake = document.createElement("br");
div.append(brake);
let checkDiv1 = document.createElement("div");
checkDiv1.setAttribute("class", "form-check form-check-inline");
div.append(checkDiv1);

let checkBox1 = document.createElement("input");
checkBox1.setAttribute("type", "checkbox");
checkBox1.setAttribute("id", "Idly");
checkBox1.setAttribute("value", "Idly");
checkBox1.setAttribute("class", "form-check-input");

checkDiv1.append(checkBox1);
let checkLabel1 = document.createElement("label");
checkLabel1.setAttribute("for", "flexCheckDefault");
checkLabel1.setAttribute("class", "form-check-label");
checkLabel1.innerHTML = "Idly";
checkDiv1.append(checkLabel1);

let checkDiv2 = document.createElement("div");
checkDiv2.setAttribute("class", "form-check form-check-inline");
div.append(checkDiv2);
let checkBox2 = document.createElement("input");
checkBox2.setAttribute("type", "checkbox");
checkBox2.setAttribute("id", "Dosa");
checkBox2.setAttribute("value", "Dosa");
checkBox2.setAttribute("class", "form-check-input");

checkDiv2.append(checkBox2);
let checkLabel2 = document.createElement("label");
checkLabel2.setAttribute("for", "flexCheckDefault");
checkLabel1.setAttribute("class", "form-check-label");
checkLabel2.innerHTML = "Dosa";
checkDiv2.append(checkLabel2);

let checkDiv3 = document.createElement("div");
checkDiv3.setAttribute("class", "form-check form-check-inline");
div.append(checkDiv3);
let checkBox3 = document.createElement("input");
checkBox3.setAttribute("type", "checkbox");
checkBox3.setAttribute("id", "Chapati");
checkBox3.setAttribute("value", "Chapati");
checkBox3.setAttribute("class", "form-check-input");

checkDiv3.append(checkBox3);
let checkLabel3 = document.createElement("label");
checkLabel3.setAttribute("for", "flexCheckDefault");
checkLabel3.setAttribute("class", "form-check-label");
checkLabel3.innerHTML = "Chapati";
checkDiv3.append(checkLabel3);

let checkDiv4 = document.createElement("div");
checkDiv4.setAttribute("class", "form-check form-check-inline");
div.append(checkDiv4);
let checkBox4 = document.createElement("input");
checkBox4.setAttribute("type", "checkbox");
checkBox4.setAttribute("id", "Biriyani");
checkBox4.setAttribute("value", "Biriyani");
checkBox4.setAttribute("class", "form-check-input");

checkDiv4.append(checkBox4);
let checkLabel4 = document.createElement("label");
checkLabel4.setAttribute("for", "flexCheckDefault");
checkLabel4.setAttribute("class", "form-check-label");
checkLabel4.innerHTML = "Biriyani";
checkDiv4.append(checkLabel4);

let checkDiv5 = document.createElement("div");
checkDiv5.setAttribute("class", "form-check form-check-inline");
div.append(checkDiv5);
let checkBox5 = document.createElement("input");
checkBox5.setAttribute("type", "checkbox");
checkBox5.setAttribute("id", "Noodles");
checkBox5.setAttribute("value", "Noodles");
checkBox5.setAttribute("class", "form-check-input");

checkDiv5.append(checkBox5);
let checkLabel5 = document.createElement("label");
checkLabel5.setAttribute("for", "flexCheckDefault");
checkLabel5.setAttribute("class", "form-check-label");
checkLabel5.innerHTML = "Noodles";
checkDiv5.append(checkLabel5);
let brake1 = document.createElement("br");
div.append(brake1);
let submitBtn = document.createElement("input");
submitBtn.setAttribute("class", "btn btn-primary");
submitBtn.setAttribute("type", "submit");
div.append(submitBtn);

let table = document.createElement("table");
table.setAttribute("class", "table table-striped-columns");
document.body.append(table);
let tableHead = document.createElement("thead");
table.append(tableHead);
let tableRow = document.createElement("tr");
tableHead.append(tableRow);
let tableHead1 = document.createElement("th");
tableHead1.setAttribute("scope", "col");
tableHead1.innerHTML = "#";
tableRow.append(tableHead1);
let tableHead2 = document.createElement("th");
tableHead2.setAttribute("scope", "col");
tableHead2.innerHTML = "First Name";
tableRow.append(tableHead2);
let tableHead3 = document.createElement("th");
tableHead3.setAttribute("scope", "col");
tableHead3.innerHTML = "Last Name";
tableRow.append(tableHead3);
let tableHead4 = document.createElement("th");
tableHead4.setAttribute("scope", "col");
tableHead4.innerHTML = "Address";
tableRow.append(tableHead4);
let tableHead5 = document.createElement("th");
tableHead5.setAttribute("scope", "col");
tableHead5.innerHTML = "PinCode";
tableRow.append(tableHead5);
let tableHead6 = document.createElement("th");
tableHead6.setAttribute("scope", "col");
tableHead6.innerHTML = "Gender";
tableRow.append(tableHead6);
let tableHead7 = document.createElement("th");
tableHead7.setAttribute("scope", "col");
tableHead7.innerHTML = "Food";
tableRow.append(tableHead7);
let tableHead8 = document.createElement("th");
tableHead8.setAttribute("scope", "col");
tableHead8.innerHTML = "State";
tableRow.append(tableHead8);
let tableHead9 = document.createElement("th");
tableHead9.setAttribute("scope", "col");
tableHead9.innerHTML = "Country";
tableRow.append(tableHead9);
let tableBody = document.createElement("tbody");
table.append(tableBody);

let handleSubmit = (event) => {
  let arr = [];

  let idly = document.querySelector("#Idly");
  let dosa = document.querySelector("#Dosa");
  let chapati = document.querySelector("#Chapati");
  let biriyani = document.querySelector("#Biriyani");
  let noodles = document.querySelector("#Noodles");
  let food = [];
  idly.checked === true ? food.push(idly.value) : null;
  dosa.checked === true ? food.push(dosa.value) : null;
  chapati.checked === true ? food.push(chapati.value) : null;
  noodles.checked === true ? food.push(noodles.value) : null;
  biriyani.checked === true ? food.push(biriyani.value) : null;

  arr.push({
    fname: event.target.fname.value,
    lname: event.target.lname.value,
    gender: event.target.gender.value,
    pin_code: event.target.pin_code.value,
    address: event.target.address.value,
    state: event.target.state.value,
    country: event.target.country.value,
    food: food.toString(),
  });

  arr.map((element) => {
    let tableRow1 = document.createElement("tr");
    tableBody.append(tableRow1);
    let tableD1 = document.createElement("td");
    tableD1.innerHTML = "#";
    tableRow1.append(tableD1);
    let tableD2 = document.createElement("td");
    tableD2.innerHTML = element.fname;
    tableRow1.append(tableD2);
    let tableD3 = document.createElement("td");
    tableD3.innerHTML = element.lname;
    tableRow1.append(tableD3);
    let tableD4 = document.createElement("td");
    tableD4.innerHTML = element.address;
    tableRow1.append(tableD4);
    let tableD5 = document.createElement("td");
    tableD5.innerHTML = element.pin_code;
    tableRow1.append(tableD5);
    let tableD6 = document.createElement("td");
    tableD6.innerHTML = element.gender;
    tableRow1.append(tableD6);
    let tableD7 = document.createElement("td");
    tableD7.innerHTML = element.food;
    tableRow1.append(tableD7);
    let tableD8 = document.createElement("td");
    tableD8.innerHTML = element.state;
    tableRow1.append(tableD8);
    let tableD9 = document.createElement("td");
    tableD9.innerHTML = element.country;
    tableRow1.append(tableD9);
  });
};
