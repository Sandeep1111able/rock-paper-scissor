const buttons = document.querySelectorAll(".btn-rps");
let player = document.querySelector("#player-score");
let computer = document.querySelector("#computer-score");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
let playerScore = 0,
    computerScore = 0;



function computerPlay() {
    const computerHand = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * computerHand.length);
    return computerHand[random].toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return computer.textContent = ++computerScore;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return computer.textContent = ++computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return computer.textContent = ++computerScore;
    } else if (playerSelection === computerSelection) {

    } else {
        return player.textContent = ++playerScore;
    }

}

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        let playerValue = e.target.textContent.toLowerCase();
        let computerValue = computerPlay();
        playRound(playerValue, computerValue);
        playerChoice.style.backgroundImage = `url('./images/${playerValue}.png')`;
        computerChoice.style.backgroundImage = `url('./images/${computerValue}.png')`;
        if (playerScore === 5) {
            alert("You Win");
            location.reload();
        } else if (computerScore === 5) {
            alert("You Lose");
            location.reload();
        }
    });
});