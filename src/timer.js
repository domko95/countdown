export function timer() {
  let timer = document.querySelector("span");

  let timeSecond = 59;
  let timeMinute = 10;
  let timeHour = 12;

  timer.innerHTML = "00:00:00";

  const countDown = setInterval(() => {
    timeSecond--;
    timer.innerHTML = `00:00: ${timeSecond}`;
  }, 1000);
}
