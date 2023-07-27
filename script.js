let div = document.createElement("div");
div.className = "div-container";
document.body.append(div);

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

meme();
