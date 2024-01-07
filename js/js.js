
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
let roundNumber = 0;


function playRound(playerSelection) {
    const computerSelection = getComputerSelection (choices)

    console.log(`Round ${roundNumber + 1}:`);
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
}


//game function
function game (playerSelection) {
    playRound(playerSelection)

    roundNumber++; //increase roundNumber evertime game is called

    if (roundNumber < 3) {
        console.log('\nNext Round')
    }  else {
        // End the game after 5 rounds
        console.log("\nGame over!");
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
        if (playerScore > computerScore) {
            console.log("Player wins the game!");
        } else if (playerScore < computerScore) {
            console.log("Computer wins the game!");
        } else {
            console.log("It's a tie!");
        }
    }
}


