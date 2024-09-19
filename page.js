
let humanScore = 0;
let computerScore = 0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const scoreDiv = document.querySelector(".score");
const resultsDiv = document.querySelector(".results");

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

/* function getHumanChoice(){
    let choice = prompt("Choose rock, paper, or scissors: ")
    return choice.toLowerCase()
} */

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

    scoreDiv.textContent = `Scores: Human: ${humanScore}, Computer: ${computerScore}`;

    checkWinner();
}

function checkWinner(){
    if(humanScore === 5){
        resultsDiv.textContent = "Congratulations! You won the game!";
        disableButtons();
    } else if(computerScore === 5){
        resultsDiv.textContent = "Oh no! The computer won the game!";
        disableButtons();
    }
}

function disableButtons(){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();

rock.addEventListener("click", ()=>{
    playRound("rock", getComputerChoice());
})

paper.addEventListener("click", ()=>{
    playRound("paper", getComputerChoice());
})

scissors.addEventListener("click", ()=>{
    playRound("scissors", getComputerChoice());
})