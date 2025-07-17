const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let searchinp = document.querySelector(".inp-sea");
let searResult = document.querySelector(".search-results");
const formEl = document.querySelector("form");

let inpputData = ""
let page = 1;

async function searchimg() {
    inpputData = searchinp.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inpputData}&client_id=${accessKey}`;

    let response = await fetch(url)
    let data = await response.json();
    if (page === 1) {
        inpputData.innerHTML = "";
    }
    const results = data.results;

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searResult.appendChild(imageWrapper);
    });

}


formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchimg();
});