var player1 = "Rocks";
var player2 = "scissors";
if (player1 === player2) {
    console.log("its a tie");
}
else if ((player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "Rock")) {
    console.log("player 1 win the match");
}
else {
    console.log("plyer 2 win this match successfully");
}
