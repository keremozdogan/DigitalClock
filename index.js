const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  const currentTime = new Date();
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let second = currentTime.getSeconds();
  let ampm;

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  hourEl.innerText = hour;
  minuteEl.innerText = minute;
  secondEl.innerText = second;
  ampmEl.innerText = ampm;
}

updateClock();
setInterval(updateClock, 1000);
