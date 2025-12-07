document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

});
