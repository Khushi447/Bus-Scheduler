let map;

window.onload = function () {
  map = L.map('map').setView([25.5941, 85.1376], 13); // Patna coordinates

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  loadMockRoutes();
};

function loadMockRoutes() {
  const route1 = L.polyline([
    [25.5941, 85.1376],
    [25.6000, 85.1500],
    [25.6050, 85.1600]
  ], { color: 'blue' }).addTo(map);
  route1.bindPopup("Route A").on('click', () => alert("Navigate to Route Details"));

  const route2 = L.polyline([
    [25.5941, 85.1376],
    [25.5900, 85.1200],
    [25.5850, 85.1100]
  ], { color: 'green' }).addTo(map);
  route2.bindPopup("Route B").on('click', () => alert("Navigate to Route Details"));
}

function startDrawing() {
  alert("Draw mode activated. Click on map to add points. (Simulation)");
  // This would use Leaflet.Draw or similar tool in production
}

function optimizeRoute() {
  alert("Optimizing route based on traffic and demand...");
  // Simulate route suggestion
}

function openNewRouteForm() {
  alert("Redirecting to New Route Form...");
}

function showRouteList() {
  alert("Redirecting to All Routes list...");
}

function showOptimizationHistory() {
  alert("Redirecting to Optimization History...");
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