// script.js
(function() { // Wrapped in an IIFE for scope safety
  const timeElement = document.getElementById("time");

  function updateTime() {
    // Using toLocaleString can make the time look more professional, 
    // but Date.now() is kept for the specific test requirement.
    timeElement.textContent = Date.now().toString(); 
  }

  // Run immediately and then every 1000ms (1 second)
  updateTime();
  setInterval(updateTime, 1000);
})();