// Run immediately and then every 1000ms (1 second)
(function () {
  const timeElement = document.getElementById("time");

  function updateTime() {
    timeElement.textContent = Date.now().toString(); 
  }
  updateTime();
  setInterval(updateTime, 1000);
})();