const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector("#nav-links");
const year = document.querySelector("#year");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}
