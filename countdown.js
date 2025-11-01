// Countdown timer for COMP208 AT3 javascript
// Graduation date roughly?: 15 December 2026

(function () {
  // Set graduation date
  const graduationDate = new Date("December 15, 2026 00:00:00").getTime();

  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(function () {
    const el = document.getElementById("countdown");
    if (!el) return; // do nothing if element not present

    const update = function () {
      const now = new Date().getTime();
      const distance = graduationDate - now;

      if (distance <= 0) {
        el.textContent = "🎉 You’ve graduated!";
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      // Optionally calculate hours/minutes/seconds:
      // const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
      el.textContent = `🎓 Graduation in ${days} days`;
    };

    // initial update + interval
    update();
    const intervalId = setInterval(update, 1000 * 60 * 60); // update hourly is enough
  });
})();
