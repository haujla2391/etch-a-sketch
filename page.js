
let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    let num = getRandomInt(3);
    let choice = "";
    if (num === 0) {
        choice = "rock";
    } else if (num === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice
}

function getHumanChoice(){
    let choice = prompt("Choose rock, paper, or scissors: ")
    return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}!`);
    } else {
        computerScore++;
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}!`);
    }

    console.log(`Scores: Human: ${humanScore}, Computer: ${computerScore}`);
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice,computerChoice);