// computer randomly selects rock, paper, or scissor

// window asking "rock paper scissors?"
// player select rock, paper, or scissor
// input is case-insensitive

// rock vs rock - tie
// rock vs paper - you lose
// rock vs scissors - you win
// paper vs rock - you win
// paper vs paper - tie
// paper vs scissors - you lose
// scissors vs rock - you lose
// scissors vs paper - you win
// scissors vs scissors - tie

function computerPlay() {
    let values = ["rock", "paper", "scissors"];
    return values[Math.floor(Math.random() * 3)];
}
console.log(computerPlay())
let computerSelection = computerPlay();

let playerChoice = prompt("Rock, paper, or scissors?");
let playerSelection = playerChoice.toLowerCase()
console.log(playerSelection)

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return alert("Tie!");
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        return alert("You Lose! Paper beats Rock");
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return alert("You win!");
    }
}


