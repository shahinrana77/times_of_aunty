const BASE_URL = "https://newsdata.io/api/1/news?apikey=pub_36949822b084a20bc32935efbb62be6c80103&q=";

let getNews = async (query) => {
  console.log("getting data....");
  let res = await fetch(`${BASE_URL}${query}`);
  let data = await res.json();
  let newsArr = data.results;
  console.log(newsArr);
  console.log(newsArr[0].title);

  let container = document.querySelector(".page");
  let innerHTML = ``;
  
  newsArr.forEach(item => {

    let country = item.image_url;

    if(country != null){
      innerHTML += `
      <div class="box">
        <div class="image"><img src=${item.image_url} alt=""></div>
        <div class="news">
          <p>${item.title}</p>
          <p>${item.country}</p>
          <p>${item.pubDate}e</p>
          <div class="company">
            <p>${item.creator}</p>
            <a class="read" href=${item.link}>Read more</a>
          </div>
        </div>
      </div>`
    };
  });

  container.innerHTML = innerHTML;
};

window.addEventListener("load", getNews("bangla"));

let navActive = null;
function navClick(id) {
  let navItem = document.getElementById(id);
  navActive?.classList.remove("active");
  navActive = navItem;
  navActive.classList.add("active");
  getNews(id);
};

let input = document.querySelector(".input");
let btnSrc = document.querySelector(".src-btn");

btnSrc.addEventListener("click", ()=>{
  const textQuery = input.value;
  if(!textQuery) return;
  getNews(textQuery);
  input.value = "";
});

let home = document.querySelector(".logo");
home.addEventListener("click", ()=>{
  getNews("bangla");
});

// let load = document.querySelector(".load");
// window.addEventListener("loaded", ()=>{
//   load.style.display = "none";
// });