let backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    // Adjust as needed
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }

  // Hide button while scrolling
  clearTimeout(window.scrollTimeout);
  backToTopBtn.style.display = "none";

  window.scrollTimeout = setTimeout(() => {
    if (window.scrollY > 100) {
      // Adjust as needed
      backToTopBtn.style.display = "block";
    }
  }, 100); // Adjust as needed
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const mobileMenuButton = document.querySelector(".header--hamburger-icon");
const mobileMenu = document.querySelector("#mobileMenu");
const closeDrawerButton = document.querySelector("#closeDrawerButton");
const drawerLinks = document.querySelectorAll("#mobileMenu a");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("open-drawer");
});

closeDrawerButton.addEventListener("click", () => {
  mobileMenu.classList.remove("open-drawer");
});

// Close the drawer when any item is clicked
drawerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open-drawer");
  });
});
