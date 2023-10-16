const hamburger = document.querySelector('.js-hamburger');

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".js-navigation-ul");
  nav.classList.toggle("active");
})