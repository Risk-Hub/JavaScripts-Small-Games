let correctAns = Math.floor(Math.random() * 100 + 1);
let count = 0;
let guess;
do {
  guess = prompt("Guess a number: ");
  guess = Number.parseInt(guess);
  if (guess > correctAns) {
    alert(
      "Oh No! You have guessed a bigger one. Try again with a smaller number."
    );
  } else if (guess < correctAns) {
    alert(
      "Oh No! You have guessed a smaller one. Try again with a bigger number."
    );
  }
  //   alert("Not OK");
  count++;
} while (guess != correctAns);
console.log(
  "Yay! You have guessed the right answer. Your total score is ",
  100 - count
);