// Scroll reveal
AOS.init();

// Accordion toggle
document.querySelectorAll(".accordion-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const isOpen = content.style.display === "block";
    
    // Close all
    document.querySelectorAll(".accordion-content").forEach((el) => el.style.display = "none");

    // Toggle current
    content.style.display = isOpen ? "none" : "block";
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