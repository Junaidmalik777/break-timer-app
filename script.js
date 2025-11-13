let activeTimers = {};

function startTimer(timerId) {
  if (activeTimers[timerId]) {
    clearInterval(activeTimers[timerId]);
  }

  let duration = 0;
  if (timerId === "brb") {
    duration = 7 * 60; // 7 minutes
  } else {
    const select = document.getElementById(timerId + "Type");
    duration = parseInt(select.value) * 60;
  }

  const display = document.getElementById(timerId + "Timer");
  const progress = document.getElementById(timerId + "Progress");
  const totalDuration = duration;

  activeTimers[timerId] = setInterval(() => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    display.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    const progressPercent = ((totalDuration - duration) / totalDuration) * 100;
    progress.style.width = progressPercent + "%";

    if (duration <= 0) {
      clearInterval(activeTimers[timerId]);
      alert(`${timerId.toUpperCase()} completed!`);
    }

    duration--;
  }, 1000);
}
