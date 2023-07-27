let div = document.createElement("div");
div.className = "div-container";
document.body.append(div);

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

emoji();
