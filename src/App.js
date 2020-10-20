import "./app.css";
import { addTime } from "./converter";

export function App() {
  const app = document.createElement("div");
  const form = document.createElement("form");
  form.className = "form";
  form.onsubmit = function (event) {
    event.preventDefault();
  };
  const btn = document.createElement("button");
  const insertSeconds = document.createElement("input");
  insertSeconds.type = "number";
  insertSeconds.id = "insert-seconds";
  insertSeconds.className = "number";
  insertSeconds.placeholder = "s";
  insertSeconds.max = 60;
  const insertMinutes = document.createElement("input");
  insertMinutes.type = "number";
  insertMinutes.id = "insert-minutes";
  insertMinutes.className = "number";
  insertMinutes.placeholder = "m";
  const insertHours = document.createElement("input");
  insertHours.type = "number";
  insertHours.id = "insert-hours";
  insertHours.className = "number";
  insertHours.placeholder = "h";

  const time = document.createElement("p");
  time.id = "countdown";

  btn.className = "startButton";
  btn.innerHTML = "Start the Countdown";
  btn.onclick = function startTimer() {
    let seconds = addTime(
      Number(insertHours.value),
      Number(insertMinutes.value),
      Number(insertSeconds.value)
    );
    const countdown = setInterval(function () {
      seconds--;
      time.innerText = seconds;
      if (time === 0) {
        clearInterval(countdown);
      }
    }, 1000);
  };
  form.append(insertHours, insertMinutes, insertSeconds, btn);
  app.append(form, time);

  return app;
}
