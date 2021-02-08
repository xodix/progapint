let timeOffset: number = 0;
// interval used for constant* execution period
setInterval(() => {
  const now: Date = new Date(Date.now() + timeOffset);
  // concatenates output string into two digit format hh:mm:ss
  document.getElementById("clock")!.textContent = `${
    now.getHours() > 9 ? now.getHours() : "0" + now.getHours()
  }:${now.getMinutes() > 9 ? now.getMinutes() : "0" + now.getMinutes()}:${
    now.getSeconds() > 9 ? now.getSeconds() : "0" + now.getSeconds()
  }`;
  // 100ms interval for accurete time representation MAX inaccuracy=99ms*
}, 100);
//  * interval or timeout aren't perfectly timed

function calculateTimeZone(Timezone: number): void {
  const timeNow = new Date();
  const millisecondMulti = 60_000;
  timeOffset =
    timeNow.getTimezoneOffset() * millisecondMulti +
    Timezone * millisecondMulti;
}

const buttons = document.getElementsByClassName("timezone");
buttons[0].addEventListener("click", () => calculateTimeZone(-300));
buttons[1].addEventListener("click", () => calculateTimeZone(0));
buttons[2].addEventListener("click", () => calculateTimeZone(60));
