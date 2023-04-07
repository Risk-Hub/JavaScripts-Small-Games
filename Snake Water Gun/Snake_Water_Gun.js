let comp_points = 0;
let user_points = 0;
let user_turn;
let comp_turn;
for (let i = 0; i < 10; i++) {
  let num = Math.floor(Math.random() * 100 + 1);
  let choice = num % 3;
  switch (choice) {
    case 0:
      comp_turn = "S";
      break;
    case 1:
      comp_turn = "W";
      break;
    case 2:
      comp_turn = "G";
      break;
  }
  user_turn = prompt(`Round-${i + 1}\nEnter your choice('S','W','G'): `);
  if (
    (user_turn == "S" && comp_turn == "W") ||
    (user_turn == "W" && comp_turn == "G") ||
    (user_turn == "G" && comp_turn == "S")
  ) {
    user_points++;
  } else if (
    (comp_turn == "S" && user_turn == "W") ||
    (comp_turn == "W" && user_turn == "G") ||
    (comp_turn == "G" && user_turn == "S")
  ) {
    comp_points++;
  }
  console.log(user_turn, comp_turn);
}
if (user_points > comp_points) {
  alert("Hurray! You won the game");
} else if (comp_points > user_points) {
  alert("Computer won the game");
} else {
  alert("Game draw");
}
