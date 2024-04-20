let result = document.getElementById('result');  
let currentInput = '0';  
let previousInput = '0';  
let operator = null;  
  
function clearResult() {  
  currentInput = '0';  
  previousInput = '0';  
  operator = null;  
  result.value = currentInput;  
}  
  
function appendNumber(num) {  
  if (currentInput === '0') {  
    currentInput = num;  
  } else {  
    currentInput += num;  
  }  
  result.value = currentInput;  
}  
  
function backspace() {  
  currentInput = currentInput.slice(0, -1);  
  if (currentInput === '') {  
    currentInput = '0';  
  }  
  result.value = currentInput;  
}  
  
function operate(op) {  
  previousInput = currentInput;  
  currentInput = '0';  
  operator = op;  
}  
  
function calculate() {  
  let num1 = parseFloat(previousInput);  
  let num2 = parseFloat(currentInput);  
  let output;  
  switch (operator) {  
    case '+':  
      output = num1 + num2;  
      break;  
    case '-':  
      output = num1 - num2;  
      break;  
    case '*':  
      output = num1 * num2;  
      break;  
    case '/':  
      output = num1 / num2;  
      break;  
    case '%':  
      output = num1 % num2;  
      break;  
    default:  
      return;  
  }  
  currentInput = output.toString();  
  previousInput = '0';  
  operator = null;  
  if (currentInput.length > 10) {  
    currentInput = currentInput.slice(0, 10);  
  }  
  result.value = currentInput;  
}  
