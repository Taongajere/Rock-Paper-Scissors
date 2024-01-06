
const choices = ["Rock", "Paper", "scissors"]

// get computer choice function
function getComputerSelection (Choices){
    // the Math.random turns the random index into a whole number
    const randomIndex = Math.floor(Math.random() * choices.length);
    let computerSelection = choices[randomIndex].toLowerCase();

    return computerSelection
}

const computerSelection = getComputerSelection (choices)

//getting reference button
const rockbtn = document.getElementById('rockbtn');
const scissorsbtn = document.getElementById('scissorsbtn');
const paperbtn = document.getElementById('paperbtn');

// function that will run after player selection

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return "Win, Rock beats scissors";
        } else if (computerSelection === 'paper') {
            return "Lose, Paper covers Rock";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return "Win, Scissors cuts paper";
        } else if (computerSelection === 'rock') {
            return "Lose, Rock smashes scissors";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return "Win, Paper covers rock";
        } else if (computerSelection === 'scissors') {
            return "Lose, Scissors cuts paper";
        }
    } else {
        return "Enter either rock, paper, or scissors";
    }
}



// event listener for each button
let playerSelection; // declair playerSelection

rockbtn.addEventListener ('click', function (){
    playerSelection = 'rock';
    const result = playRound ('rock', computerSelection)
    console.log(result);
});
paperbtn.addEventListener ('click', function () {
    playerSelection = 'paper'
    const result = playRound ('paper', computerSelection)
    console.log(result);
});
scissorsbtn.addEventListener ('click', function () {
    playerSelection = 'scissors'
    const result = playRound ('scissors', computerSelection)
    console.log(result);
});

