document.addEventListener("DOMContentLoaded", function () {
  const footerYear = document.getElementById("footerYear");
  if (footerYear) {
    footerYear.textContent = `© ${new Date().getFullYear()} Bryan's Café`;
  }

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }

  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Your message has been sent successfully.");
      enquiryForm.reset();
    });
  }
});
window.addEventListener("scroll", function () {
  const logo = document.querySelector(".logo");
  const header = document.querySelector(".site-header");

  if (window.scrollY > 50) {
    logo.classList.add("scrolled");
    header.classList.add("scrolled");
  } else {
    logo.classList.remove("scrolled");
    header.classList.remove("scrolled");
  }
});