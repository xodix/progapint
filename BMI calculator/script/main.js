const f = document.getElementsByName('f')[0];
const err = document.getElementById('err');
function calculateBMI(e) {
  e.preventDefault();
  const result = +f.weight.value / ((+f.height.value) ** 2 * 0.0001);
  err.textContent = (result < 18.5) ? 'too little!' : (result > 25) ? "too much!" : "OK!";
  f.result.value = result;
}

// data validation without HTML form control
function calculateBMICheck(e) {
  e.preventDefault();
  const height = +f.height.value;
  const weight = +f.weight.value;
  if (isNaN(height) || isNaN(weight)) return alert("Values need to be numeric");
  if (height < 100 || height > 250 || weight < 50 || weight > 250) return alert("Values out of range");
  const result = weight / ((height) ** 2 * 0.0001);
  err.textContent = (result < 18.5) ? 'too little!' : (result > 25) ? "too much!" : "OK!";
  f.result.value = result;
}

f.addEventListener("submit", calculateBMICheck);