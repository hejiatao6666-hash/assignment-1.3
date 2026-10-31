const firstNumberInput = document.getElementById("first-number");
const secondNumberInput = document.getElementById("second-number");
const resultDisplay = document.getElementById("result");
const operationButtons = document.querySelectorAll("button[data-operation]");

function calculate(operation) {
  const firstText = firstNumberInput.value.trim();
  const secondText = secondNumberInput.value.trim();
  const firstNumber = Number(firstText);
  const secondNumber = Number(secondText);

  if (!firstText || !secondText || !Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    resultDisplay.textContent = "Please enter two valid numbers.";
    return;
  }

  if (operation === "divide" && secondNumber === 0) {
    resultDisplay.textContent = "Cannot divide by zero.";
    return;
  }

  let answer;

  if (operation === "add") {
    answer = firstNumber + secondNumber;
  } else if (operation === "subtract") {
    answer = firstNumber - secondNumber;
  } else if (operation === "multiply") {
    answer = firstNumber * secondNumber;
  } else {
    answer = firstNumber / secondNumber;
  }

  resultDisplay.textContent = Number.isFinite(answer)
    ? `Result: ${Number(answer.toPrecision(12))}`
    : "Result is too large to display.";
}

operationButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    calculate(button.dataset.operation);
  });
});
