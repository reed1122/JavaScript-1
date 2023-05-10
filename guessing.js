function submitData() {
  let min = Number(guessForm.min.value);
  let max = Number(guessForm.max.value);
  console.log(min);
  console.log(max);
  if (min == "" || max == "") {
    let value = "Both fields must be filled in.";
    let color = "red";
    updateDOM(value, color);

    return false;
  }

  if (min > max) {
    let value = "The min value cannot be greater than the max value";
    let color = "red";
    updateDOM(value, color);
    return false;
  }

  numberGuessGame(min, max);
  return false;
}

function updateDOM(value, color) {
  document.getElementById("output").innerHTML = value;
  document.getElementById("output").style.color = color;
}

function numberGuessGame(min, max) {
  let num = Math.ceil(randomNumber(min, max));
  console.log(num);
  let message =
    "I'm thinking of a number between " +
    min +
    " and " +
    max +
    " try to guess it.";
  let guess;
  do {
    guess = parseInt(prompt(message));
    if (guess < num) {
      message = "Guess is to low. Try again!";
      guess = parseInt(prompt(message));
    }
    if (guess > num) {
      message = "Guess is to High. Try again!";
      guess = parseInt(prompt(message));
    }
    if (isNaN(guess)) {
      break;
    }
  } while (guess !== num);
  message = "Congrats, you win!";
  updateDOM(message, "green");
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
