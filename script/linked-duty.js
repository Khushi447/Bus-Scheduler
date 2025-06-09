document.getElementById('dutyForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const start = document.getElementById('startTime').value;
  const end = document.getElementById('endTime').value;
  const feedback = document.getElementById('feedback');

  // Simulated overlap check with a fixed shift (example: 09:00 to 13:00)
  const overlapExists = checkOverlap(start, end, "09:00", "13:00");

  if (overlapExists) {
    feedback.style.color = "red";
    feedback.textContent = "❗ Overlapping shift detected. Please adjust timing or change Bus ID.";
  } else {
    feedback.style.color = "green";
    feedback.textContent = "✅ Duty assigned successfully!";
  }
});

// Simple time overlap logic
function checkOverlap(start1, end1, start2, end2) {
  const toMinutes = (timeStr) => {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  };

  const s1 = toMinutes(start1);
  const e1 = toMinutes(end1);
  const s2 = toMinutes(start2);
  const e2 = toMinutes(end2);

  return (s1 < e2 && e1 > s2); // true if overlap
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
