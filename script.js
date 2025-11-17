  document.querySelectorAll(".circle-number li").forEach(item => {
    item.querySelector(".li-header").addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
const headers = document.querySelectorAll('.faq-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        header.classList.toggle('active');
    });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});


const items = document.querySelectorAll(".item");

items.forEach(item => {
  const header = item.querySelector(".li-header");

  header.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});


