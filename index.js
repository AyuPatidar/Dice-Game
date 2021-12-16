document.querySelector("button").onclick = function () {
  var player1Dice = Math.floor(Math.random() * 6) + 1;
  var player2Dice = Math.floor(Math.random() * 6) + 1;
  document.getElementsByClassName("player1-dice")[0].setAttribute("src", "images/dice"+player1Dice+".png");
  document.getElementsByClassName("player2-dice")[0].setAttribute("src", "images/dice"+player2Dice+".png");
  if (player1Dice > player2Dice) {
    document.getElementsByClassName("result")[0].textContent = "Player 1 Wins 🥳";
  } else if (player1Dice < player2Dice) {
    document.getElementsByClassName("result")[0].textContent = "Player 2 Wins 🥳";
  } else {
    document.getElementsByClassName("result")[0].textContent = "Draw! Try Again";
  }
}
