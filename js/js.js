
const choices = ["rock", "paper", "scissors"]

// get computer choice function
function getComputerSelection (Choices){
    // the Math.random turns the random index into a whole number
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex].toLowerCase();
}


// getting playerSelction

rockbtn.addEventListener ('click', function (){
    game('rock'); 
});
paperbtn.addEventListener ('click', function () {
    game('paper');
});
scissorsbtn.addEventListener ('click', function () {
    game('scissors');
});



// function that will run after player selection
let computerScore = 0;
let playerScore = 0;
let roundNumber = 1;


function playRound(playerSelection) {
    const computerSelection = getComputerSelection (choices)

    console.log(`Round ${roundNumber }:`);
    console.log(`Player chooses ${playerSelection}`);
    console.log(`Computer chooses ${computerSelection}`);

    if (playerSelection === computerSelection) {
        result = "draw"
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
        ) {
            result = 'win'
            playerScore++;
        } else {
            result = "lose"
            computerScore++;
        }
    
    console.log(result);
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('round').textContent = roundNumber;
 }


//game function
function game (playerSelection) {
    playRound(playerSelection)

    roundNumber++; //increase roundNumber evertime game is called
    if (roundNumber <= 3) {
        console.log('\nNext Round')
    }  else {
        // End the game after 3 rounds
        console.log("\nGame over!");
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
        resetGame(); // calls the function reset game
        if (playerScore > computerScore) {
            console.log("Player wins the game!");
        } else if (playerScore < computerScore) {
            console.log("Computer wins the game!");
        } else {
            console.log("It's a tie!");
        }
    }
}


// reseting game
function resetGame () {
    computerScore = 0;
    playerScore = 0;
    roundNumber = 0;
    document.getElementById('computerScore').textContent = 0;
    document.getElementById('playerScore').textContent = 0;
    document.getElementById('round').textContent = 0;
}

