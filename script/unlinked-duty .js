function requestDuty(dutyId) {
  const modal = document.getElementById("requestModal");
  const text = document.getElementById("modalText");
  text.textContent = `Are you sure you want to request Duty ID ${dutyId}?`;
  modal.dataset.dutyId = dutyId;
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("requestModal");
  modal.classList.add("hidden");
}

function confirmRequest() {
  const modal = document.getElementById("requestModal");
  const dutyId = modal.dataset.dutyId;
  modal.classList.add("hidden");

  // Simulate request and show toast
  const toast = document.getElementById("toast");
  toast.textContent = `Duty ID ${dutyId} has been requested. Await approval.`;
  toast.style.display = "block";
  setTimeout(() => (toast.style.display = "none"), 3000);
}

function clearFilters() {
  document.getElementById("filterDate").value = "";
  document.getElementById("filterShift").value = "";
  document.getElementById("filterDepot").value = "";
  document.getElementById("searchInput").value = "";
  // Add logic to reset duty list if dynamic
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