const toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

// Card functionality

const cards = [
  {
    title: "Learn to code in 2020, get hired, and have fun along the way",
    subtitle: "Article by Andrei Neagoie.",
    minutes: "08",
    link:
      "https://zerotomastery.io/blog/learn-to-code-in-2020-get-hired-and-have-fun-along-the-way/",
  },
  {
    title: "Tools I wish I had known about when I started coding",
    subtitle: "Article by Mario Hoyos.",
    minutes: "10",
    link:
      "https://medium.freecodecamp.org/tools-i-wish-i-had-known-about-when-i-started-coding-57849efd9248",
  },
  {
    title: "Productivity: How I am so productive",
    subtitle:
      "In this article, C. Dodds is sharing his daily activity that makes him so productive.",
    minutes: "20",
    link: "https://blog.kentcdodds.com/how-i-am-so-productive-fb86eb583b0d",
  },
  {
    title: "front-end-guide",
    subtitle:
      "An extended article/GitHub repo that addresses what a modern web developer should study and be aware of.",
    minutes: "45",
    link: "https://github.com/grab/front-end-guide",
  },
  {
    title: "Front End Web Development Setup",
    subtitle:
      "An informative article on how to put together a front-end development environment.",
    minutes: "15",
    link: "https://www.taniarascia.com/my-front-end-web-development-setup/",
  },
  {
    title: "The Cost of Javascript",
    subtitle:
      "Article about being mindful of what and how we use javascript in our applications.",
    minutes: "30",
    link:
      "https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4",
  },
  {
    title: "How The Web Works",
    subtitle:
      "An introduction on how the web actually works. Article by Maximilian Schwarzmüller.",
    minutes: "15",
    link: "https://academind.com/learn/web-dev/how-the-web-works/",
  },
  {
    title: "Static vs Dynamic vs SPA",
    subtitle:
      "In this article the author explains different techniques on how to build modern web pages and the pros & cons of each. Article by Maximilian Schwarzmüller.",
    minutes: "15",
    link: "https://www.taniarascia.com/my-front-end-web-development-setup/",
  },
];
const title = document.querySelector(".card-title");
const subtitle = document.querySelector(".card-subtitle");
const minutes = document.querySelector(".minutes");
const cardBtn = document.querySelector(".card-cta");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

const showCard = () => {
  const item = cards[currentItem];
  title.textContent = item.title;
  subtitle.textContent = item.subtitle;
  minutes.textContent = item.minutes;
  cardBtn.href = item.link;
};

window.addEventListener("DOMContentLoaded", () => {
  showCard();
});

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > cards.length - 1) {
    currentItem = 0;
  }
  showCard();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = cards.length - 1;
  }
  showCard();
});

// End of card functionality
