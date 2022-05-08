// computerPlay: computer randomly selects rock, paper, or scissor

// window asking "rock paper scissors?"
// playerSelection: player select rock, paper, or scissor

// outcome1: rock beats scissor
// outcome2: paper beats rocks
// outcome3: scissor beats paper
// display "you win!" + outcome (above) if player wins
// display "you lose!" if player loses
// input is case-insensitive

let values = ["rock", "paper", "scissors"];
let computerPlay = values[Math.floor(Math.random() * 3)];
let computerSelection = computerPlay;

function playRound(playerSelection, computerSelection) {
    if (playerSelection=="rock" && computerSelection=="rock") {
        alert('Tie!')
    }
    if (playerSelection=="rock" && computerSelection=="paper") {
        alert('You Lose! Paper beats Rock')
    }
    if (playerSelection=="rock" && computerSelection=="scissors") {
        alert('You win!')
    }
}


