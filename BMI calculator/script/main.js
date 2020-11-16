const f = document.getElementsByName('f')[0];
const err = document.getElementById('err');
function calculateBMI(e) {
  e.preventDefault();
  const result = +f.weight.value / ((+f.height.value) ** 2 * 0.0001);
  err.textContent = (result < 18.5) ? 'too little!' : (result > 25) ? "too much!" : "OK!";
  f.result.value = result;
}

// data validation without HTML form control
function calculateBMICheck() {
  e.preventDefault();
  if (isNaN(+f.height) || isNaN(+f.weight)) return alert("Values need to be numeric");
  if (f.height < 100 || f.height > 250 || f.weight < 50 || f.weight > 250) return alert("Values out of range");
  const result = +f.weight.value / ((+f.height.value) ** 2 * 0.0001);
  err.textContent = (result < 18.5) ? 'too little!' : (result > 25) ? "too much!" : "OK!";
  f.result.value = result;
}

f.addEventListener("submit", calculateBMICheck);