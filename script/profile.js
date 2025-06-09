// Simple scroll reveal animation
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll("[data-reveal]");

  const revealOnScroll = () => {
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  };

  // Initial setup
  reveals.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.6s ease-out";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger once on load
});


