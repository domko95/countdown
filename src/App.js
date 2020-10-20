import "./app.css";

export function App() {
  const app = document.createElement("div");
  const btn = document.createElement("button");
  const input = document.createElement("input");
  input.type = "number";
  input.id = "insert-time";
  input.className = "number";
  input.placeholder = "Insert Time";

  const time = document.createElement("p");
  time.id = "countdown";

  btn.className = "startButton";
  btn.innerHTML = "Start the Countdown";
  btn.onclick = function startTimer() {
    let seconds = input.value;
    let countdown = setInterval(function () {
      seconds--;
      time.innerText = seconds;
      if (seconds <= 0) clearInterval(countdown);
    }, 1000);
  };

  app.append(input, btn, time);

  return app;
}
