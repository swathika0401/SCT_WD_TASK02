let display = document.getElementById("display");
let currentInput = "";

function appendValue(value) {
  currentInput += value;
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = "";
  display.innerText = "0";
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || "0";
}

function calculate() {
  try {
    let result = eval(currentInput);
    display.innerText = result;
    currentInput = result.toString();
  } catch (err) {
    display.innerText = "Error";
    currentInput = "";
  }
}