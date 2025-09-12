let count = 0;
const countDisplay = document.getElementById("count");

document.getElementById("increment").addEventListener("click", () => {
  count++;
  updateDisplay();
});

document.getElementById("decrement").addEventListener("click", () => {
  count--;
  updateDisplay();
});

document.getElementById("resetZero").addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

document.getElementById("resetCustom").addEventListener("click", () => {
  const customValue = parseInt(document.getElementById("customValue").value);
  if (!isNaN(customValue)) {
    count = customValue;
    updateDisplay();
  } else {
    alert("Please enter a valid number!");
  }
});

function updateDisplay() {
  countDisplay.innerHTML = count;
}
