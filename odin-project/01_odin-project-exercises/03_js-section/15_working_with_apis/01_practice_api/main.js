const imgWrapper = document.querySelector(".img-wrapper");
const btn = document.querySelector("#new-gif");
const searchForm = document.querySelector("form");
const searchInput = document.querySelector("#search");
const errorMsg = document.querySelector(".error");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchGif(searchInput.value);
  searchInput.value = "";
});

btn.addEventListener("click", init);

function searchGif(query) {
  async function getGif() {
    try {
      let apiKey = "xA2CejGIc8wKgASK0Ybc4brkr0pOS98A";
      const respose = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}`,
        {
          mode: "cors",
        },
      );
      const gifData = await respose.json();
      let result = "";
      gifData.data.forEach((obj) => {
        const gifURL = obj.images.fixed_width.url;
        const height = obj.images.fixed_width.height;
        const width = obj.images.fixed_width.width;
        const title = obj.title;
        result += `<img class="imgClass" src="${gifURL} width="${width}" height="${height}" alt="${title}">`;
      });
      imgWrapper.innerHTML = result;
    } catch (err) {
      displayError(err);
    }
  }
  getGif();
}

function defaultGif() {
  async function getGif() {
    let apiKey = "xA2CejGIc8wKgASK0Ybc4brkr0pOS98A";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=kobe`,
      {
        mode: "cors",
      },
    );
    const gifData = await response.json();
    displayGif(gifData);
  }
  getGif();
}

function displayGif(res) {
  let result = "";
  const gifURL = res.data.images.original.url;
  const width = res.data.images.original.width;
  const height = res.data.images.original.height;
  const title = res.data.title;
  result = `<img class="kobe" src="${gifURL} width="${width}" height="${height}" alt="${title}">`;
  imgWrapper.innerHTML = result;
}

function displayError(err) {
  errorMsg.textContent = `ERROR: ${err}!`;
}

function init() {
  defaultGif();
}
document.addEventListener("DOMContentLoaded", init);
