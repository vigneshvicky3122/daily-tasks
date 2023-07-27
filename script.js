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

let div22 = document.createElement("div");
div22.className = "card";
div.append(div22);
async function meme(params) {
  await fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) => {
      for (let index = 0; index < data.data.memes.length; index++) {
        const element = data.data.memes[index];
        let img2 = document.createElement("img");
        img2.src = element.url;
        div22.append(img2);
        let div23 = document.createElement("div");
        div23.className = "card-body";
        div22.append(div23);
        let h52 = document.createElement("h5");
        h52.className = "card-title";
        h52.innerHTML = element.name;
        div23.append(h52);
      }
    })
    .catch(console.error());
}

let div31 = document.createElement("div");
div31.className = "card";
div.append(div31);
async function emoji(params) {
  await fetch("https://emojihub.yurace.pro/api/all")
    .then((res) => res.json())
    .then((data) => {
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let icon = document.createElement("p");
        icon.className = "icon";
        icon.innerHTML = element.htmlCode[0];
        div31.append(icon);
        let div32 = document.createElement("div");
        div32.className = "card-body";
        div31.append(div32);
        let h52 = document.createElement("h5");
        h52.className = "card-title";
        h52.innerHTML = element.name;
        div32.append(h52);
        let p2 = document.createElement("p");
        p2.className = "card-text";
        p2.innerHTML = element.category;
        div32.append(p2);
      }
    })
    .catch(console.error());
}
getMeals();
meme();
emoji();
