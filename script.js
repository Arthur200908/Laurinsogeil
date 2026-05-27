const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const calculateButton = document.getElementById('calculateButton');
const result = document.getElementById('result');

function calculate() {
  const a = Number(value1.value);
  const b = Number(value2.value);
  const product = a * b;
  result.textContent = `Ergebnis: ${product}`;
}

calculateButton.addEventListener('click', calculate);
window.addEventListener('DOMContentLoaded', calculate);
