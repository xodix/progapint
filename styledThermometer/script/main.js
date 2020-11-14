const inputs = document.getElementsByTagName('textarea');
const err = document.getElementById('err');

function convert(e) {

  // clears the timeout
  clearTimeout(idiotTimer);

  const { name, value } = e.target;
  // isNan checks if value is empty or just not a number, then it ends the execution of the function
  if (isNaN(+value)) return;

  if (name === 'celsius') {
    inputs[1].value = (+value * 1.8 + 32).toFixed(2);
    inputs[2].value = (+value + 273.15).toFixed(2);
  }

  else if (name === 'fahrenheit') {
    inputs[0].value = (+value / 1.8 + 32).toFixed(2);
    inputs[2].value = (+value / 1.8 + 32 + 273.15).toFixed(2);
  }

  else {
    if (value < 0) return err.textContent = "Fun fact: kelvin temperature can't be lower than 0";
    inputs[0].value = (+value - 273.15).toFixed(2);
    inputs[1].value = Math.round(((+value - 273.15) * 1.8 + 32) * 100) / 100;
  }

}

// sets the timeout to show how the site is used (yes this could be avoided if I had an hour to think about UX)
const idiotTimer = window.setTimeout(() => err.textContent = "Hint: numbers on cards are editable inputs! Just click on them and start writing", 15000);

for (const i of inputs) {
  i.addEventListener("input", convert);
}