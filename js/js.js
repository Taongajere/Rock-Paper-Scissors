
const choices = ["Rock", "Paper", "scissors"]


// get computer choice function
function getComputerChoice (Choices){
    // the Math.random turns the random index into a whole number
    const randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex].toLowerCase();

    return computerChoice
}

const computerChose = getComputerChoice(choices)


// get user choice
let userChoice = prompt("Rock, Paper or Scissors?:" );
userChoice = userChoice.toLocaleLowerCase();
console.log("you choose: " + userChoice)
console.log("computer chose: " + computerChose)

// declair winner
function game (userChoice, computerChose){
    if (userChoice === computerChose){
        return "Draw"
    } else if (userChoice === 'rock'){
        if (computerChose === 'scissors') {
            return "Win, Rock beats scissors";
        }else if (computerChose === paper) {
            return "Lose, Paper covers Rock";
        }
    } else if (userChoice === 'scissors') {
        if (computerChose === 'paper') {
            return "win, scissors cuts paper";
        } else if (computerChose == 'rock') {
            return "lose, Rock smashes scissors";
        }
    } else if (userChoice === 'paper') {
        if (computerChose === 'rock') {
            return "win, paper covers rock";
        } else if (computerChose === 'scissors') {
            return "Lose, scissors cuts paper";
        }
    } else if (userChoice != 'rock', 'paper', 'scissors') {
        return "enter either rock, paper or scissors"
    }
}

console.log(game (userChoice, computerChose));