let div = document.createElement("div");
div.className = "div-container";
document.body.append(div);
let div1 = document.createElement("div");
div1.className = "card";
div.append(div1);

async function getMeals(params) {
  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => res.json())
    .then((data) => {
      for (let index = 0; index < data.categories.length; index++) {
        const element = data.categories[index];
        let img1 = document.createElement("img");
        img1.src = element.strCategoryThumb;
        div1.append(img1);
        let div2 = document.createElement("div");
        div2.className = "card-body";
        div1.append(div2);
        let h51 = document.createElement("h5");
        h51.className = "card-title";
        h51.innerHTML = element.strCategory;
        div2.append(h51);
        let p1 = document.createElement("p");
        p1.className = "card-text";
        p1.innerHTML = element.strCategoryDescription;
        div2.append(p1);
      }
    })
    .catch(console.error());
}

getMeals();
