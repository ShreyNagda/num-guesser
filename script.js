let randomNumber = Math.ceil(Math.random() * 100);
let input = document.getElementById("input");
let result = document.getElementById("result");
let numberOfGuesses = 0;

function checkNumber() {
  if (!input.value) {
    result.innerText = "Enter a number";
    return;
  } else {
    numberOfGuesses++;
    if (input.value > randomNumber) {
      result.innerText = `'${input.value}' is not the number\nTry little lower`;
    } else if (input.value < randomNumber) {
      result.innerText = `'${input.value}' is not the number\nTry little higher`;
    } else {
      result.innerText = `Hoorah!\nYou guessed the number in ${numberOfGuesses} tries`;
    }
  }
  input.value = "";
}
