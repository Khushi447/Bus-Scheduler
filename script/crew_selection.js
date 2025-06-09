function goTo(option) {
  switch(option) {
    case 'linked':
      window.location.href = "linked_schedule.html";
      break;
    case 'unlinked':
      window.location.href = "unlinked_schedule.html";
      break;
    case 'route':
      window.location.href = "route_management.html";
      break;
    default:
      alert("Invalid option");
  }
}

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

