function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById("js-hamburger");
  var blackBg = document.getElementById("js-black-bg");
  var navLinks = document.querySelectorAll(".global-nav a");

  if (!hamburger || !blackBg) {
    return;
  }

  hamburger.addEventListener("click", function () {
    body.classList.toggle("nav-open");
  });
  blackBg.addEventListener("click", function () {
    body.classList.remove("nav-open");
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      body.classList.remove("nav-open");
    });
  });
}

toggleNav();

// Show floating top button on scroll (beauty-lp only)
document.addEventListener("DOMContentLoaded", function () {
  var floatingTop = document.querySelector(".floating-top");
  if (!floatingTop) {
    return;
  }

  function updateFloatingTop() {
    if (window.scrollY > 200) {
      floatingTop.classList.add("is-visible");
    } else {
      floatingTop.classList.remove("is-visible");
    }
  }

  updateFloatingTop();
  window.addEventListener("scroll", updateFloatingTop);
});
