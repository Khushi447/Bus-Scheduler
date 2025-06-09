// Animate on scroll
AOS.init();

// Tabs switching
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active classes
    tabButtons.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    // Add to clicked
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
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