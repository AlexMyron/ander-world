const [btnRed, btnBlue] = document.querySelectorAll('.btn');

btnRed.addEventListener('click', parseNumber);
btnBlue.addEventListener('click', addDivideNumbers);

function isInvalid(arg) {
  const parsedArg = Number(arg);
  return (
    typeof parsedArg !== 'number' ||
    isNaN(parsedArg) ||
    arg === null ||
    arg === '' ||
    arg.trim() === ''
  );
}

// --- First Task ---
function parseNumber() {
  const int = prompt('Enter a number');
  const calc = prompt('Enter a system number');

  const [parsedInt, parsedCalc] = [Number(int), Number(calc)];

  if (isInvalid(int) || isInvalid(calc)) {
    return alert('Incorrect input!');
  }

  return alert(parsedInt.toString(parsedCalc));
}

// --- Second Task ---
function addDivideNumbers() {
  const firstArg = prompt('Enter a first number');
  if (isInvalid(firstArg)) return alert('Incorrect input!');
  const secondArg = prompt('Enter a second number');
  if (isInvalid(secondArg)) return alert('Incorrect input!');

  const [firstNum, secondNum] = [Number(firstArg), Number(secondArg)];
  const sum = firstNum + secondNum;
  const quotient = firstNum / secondNum;

  alert(`Result: ${sum}, ${quotient}`);
}
