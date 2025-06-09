// AOS Scroll animation
AOS.init();

// Accordion functionality
document.querySelectorAll(".accordion-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const content = this.nextElementSibling;

    document.querySelectorAll(".accordion-content").forEach((el) => {
      if (el !== content) el.style.display = "none";
    });

    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

const profileToggle = document.getElementById("profileToggle");
const profileDropdown = document.getElementById("profileDropdown");

// Toggle dropdown on click
profileToggle.addEventListener("click", () => {
  profileDropdown.style.display =
    profileDropdown.style.display === "block" ? "none" : "block";
});

// Hide dropdown when clicking outside
window.addEventListener("click", function (e) {
  if (!profileToggle.contains(e.target) && !profileDropdown.contains(e.target)) {
    profileDropdown.style.display = "none";
  }
});