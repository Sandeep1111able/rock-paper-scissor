function computerPlay(){
    const computerHand = ["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random()*computerHand.length);
    return computerHand[random].toLowerCase();
}

function playRound(playerSelection,computerSelection){
    if(playerSelection==="rock" && computerSelection==="paper" ){
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        return "You Lose! Scissors beats paper";
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        return "You Lose! Scissors beats paper";
    }
    else if (playerSelection===computerSelection){
        return `It's a draw! You both picked ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    }
    else{
        return `You Won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;
    }

}

function game(){
    for(let i =0; i<5;i++){
    const userInput = prompt('Please Enter Rock,Paper or Scissors').toLowerCase();
    console.log(playRound(userInput,computerPlay()));
    }
}

game();

