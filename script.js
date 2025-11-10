// Simple thunder flash effect
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".overlay");
  setInterval(() => {
    overlay.style.background = "rgba(255,255,255,0.2)";
    setTimeout(() => overlay.style.background = "rgba(0,0,0,0.6)", 100);
  }, 4000);
});
