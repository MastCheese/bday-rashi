function toggleCountdown() {
    const countdown = document.getElementById("countdownBox");
  
    if (countdown.style.display === "none" || countdown.style.display === "") {
      countdown.style.display = "block";
      updateRelationshipCounter();
    } else {
      countdown.style.display = "none";
    }
  }
  
  function updateRelationshipCounter() {
    const startDate = new Date("2024-10-12T00:00:00");
    const now = new Date();
    let delta = Math.abs(now - startDate) / 1000;
  
    const months = Math.floor(delta / (30 * 24 * 60 * 60));
    delta -= months * 30 * 24 * 60 * 60;
  
    const days = Math.floor(delta / (24 * 60 * 60));
    delta -= days * 24 * 60 * 60;
  
    const hours = Math.floor(delta / (60 * 60));
    delta -= hours * 60 * 60;
  
    const minutes = Math.floor(delta / 60);
  
    const display = `${months} months, ${days} days, ${hours} hours, ${minutes} minutes 💜`;
  
    const counterEl = document.getElementById("relationship-counter");
    if (counterEl) counterEl.textContent = display;
  }
  
  // Keep it live every minute if visible
  setInterval(() => {
    const countdown = document.getElementById("countdownBox");
    if (countdown && countdown.style.display === "block") {
      updateRelationshipCounter();
    }
  }, 60000);
  
  // Optional: update on load if already visible
  document.addEventListener("DOMContentLoaded", () => {
    const countdown = document.getElementById("countdownBox");
    if (countdown && countdown.style.display === "block") {
      updateRelationshipCounter();
    }
  });
  