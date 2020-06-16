// Articles card grid
const toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

const articles = [
  {
    cardTitle: "Learn to code in 2020, get hired, and have fun along the way",
    cardSubtitle: "Article by Andrei Neagoie.",
    time: "08",
    src:
      "https://zerotomastery.io/blog/learn-to-code-in-2020-get-hired-and-have-fun-along-the-way/",
    category: `2020`,
  },
  {
    cardTitle: "React vs Vue.JS: Which Front-end Framework to Choose",
    cardSubtitle:
      "In this article, we’ll briefly consider the status quo in the world of modern JavaScript frameworks, comparing React and Vue.JS.",
    time: "25",
    src:
      "https://expertise.jetruby.com/react-vs-vue-js-which-front-end-framework-to-choose-in-2018-2a62a1fe76f9",
    category: `framework`,
  },
  {
    cardTitle: "Tools I wish I had known about when I started coding",
    cardSubtitle: "Article by Mario Hoyos.",
    time: "10",
    src:
      "https://medium.freecodecamp.org/tools-i-wish-i-had-known-about-when-i-started-coding-57849efd9248",
    category: `tools`,
  },
  {
    cardTitle: "Productivity: How I am so productive",
    cardSubtitle:
      "In this article, C. Dodds is sharing his daily activity that makes him so productive.",
    time: "20",
    src: "https://blog.kentcdodds.com/how-i-am-so-productive-fb86eb583b0d",
    category: `motivation`,
  },
  {
    cardTitle: "front-end-guide",
    cardSubtitle:
      "An extended article/GitHub repo that addresses what a modern web developer should study and be aware of.",
    time: "45",
    src: "https://github.com/grab/front-end-guide",
    category: `frontend`,
  },
  {
    cardTitle: "Front End Web Development Setup",
    cardSubtitle:
      "An informative article on how to put together a front-end development environment.",
    time: "15",
    src: "https://www.taniarascia.com/my-front-end-web-development-setup/",
    category: `frontend`,
  },
  {
    cardTitle: "The Cost of Javascript",
    cardSubtitle:
      "Article about being mindful of what and how we use javascript in our applications.",
    time: "30",
    src:
      "https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4",
    category: `javascript`,
  },
  {
    cardTitle: "How The Web Works",
    cardSubtitle:
      "An introduction on how the web actually works. Article by Maximilian Schwarzmüller.",
    time: "15",
    src: "https://academind.com/learn/web-dev/how-the-web-works/",
    category: `backend`,
  },
  {
    cardTitle: "Static vs Dynamic vs SPA",
    cardSubtitle:
      "In this article the author explains different techniques on how to build modern web pages and the pros & cons of each. Article by Maximilian Schwarzmüller.",
    time: "15",
    src: "https://www.taniarascia.com/my-front-end-web-development-setup/",
    category: `backend`,
  },
  {
    cardTitle: "Modern Development Environment for Windows",
    cardSubtitle: "Setting up a windows computer for front-end development.",
    time: "25",
    src:
      "https://char.gd/blog/2017/how-to-set-up-the-perfect-modern-dev-environment-on-windows",
    category: `tools`,
  },
];

const articlesCenter = document.querySelector(".articles-center");
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const articleCategory = articles.filter(function (articleItem) {
      if (articleItem.category === category) {
        return articleItem;
      }
    });
    if (category === `all`) {
      displayArticles(articles);
      filter.classList.remove("show-filter");
    } else {
      displayArticles(articleCategory);
      filter.classList.remove("show-filter");
    }
  });
});

window.addEventListener("DOMContentLoaded", function () {
  displayArticles(articles);
});

function displayArticles(articlesItems) {
  let displayArticles = articlesItems.map(function (article) {
    return `<div class="article-card">
    <div class="card-container">
      <h4 class="article-title">
        ${article.cardTitle}
      </h4>
      <h6 class="article-subtitle">${article.cardSubtitle}</h6>
      <a class="article-cta" href="${article.src}" target="_blank">Take me there!</a>
    </div>
    <div class="minutes-container">
      <img src="svg/clock.svg" alt="" class="clock" />
      <h4 class="time">${article.time}</h4>
      <h6>MIN</h6>
      <h6>READ</h6>
    </div>
  </div>`;
  });
  displayArticles = displayArticles.join("");
  articlesCenter.innerHTML = displayArticles;
}

const showFilters = document.querySelector(".display-filter-btn");
const closeFilterBtn = document.querySelector(".close-filter-btn");
const filter = document.querySelector(".filter-overlay");

showFilters.addEventListener("click", () => {
  filter.classList.add("show-filter");
});

closeFilterBtn.addEventListener("click", () => {
  filter.classList.remove("show-filter");
});
