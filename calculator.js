// Get the display element
const display = document.getElementById('display');

// Get the buttons
const buttons = document.querySelectorAll('button');

// Define the calculator's state
let currentNumber = '';
let previousNumber = '';
let operator = '';

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the button's value
    const value = button.textContent;

    // Handle numbers
    if (!isNaN(value)) {
      currentNumber += value;
      display.value = currentNumber;
    }

    // Handle operators
    if (['+', '-', '*', '/'].includes(value)) {
      previousNumber = currentNumber;
      currentNumber = '';
      operator = value;
    }

    // Handle equals
    if (value === '=') {
      const result = calculate(previousNumber, currentNumber, operator);
      display.value = result;
      currentNumber = result;
      previousNumber = '';
      operator = '';
    }

    // Handle clear
    if (value === 'C') {
      currentNumber = '';
      previousNumber = '';
      operator = '';
      display.value = '';
    }
  });
});

// Define the calculate function
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return parseFloat(num1) + parseFloat(num2);
    case '-':
      return parseFloat(num1) - parseFloat(num2);
    case '*':
      return parseFloat(num1) * parseFloat(num2);
    case '/':
      return parseFloat(num1) / parseFloat(num2);
    default:
      return 0;
  }
}