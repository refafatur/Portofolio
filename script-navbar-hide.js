let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
