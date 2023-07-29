let playerWins = 0
let computerWins = 0
// Gets random number from 0 to 100 and returns one of the outcomes based on it
function getComputerChoice() {
    let number = Math.floor(Math.random() * 100);
    if (number >= 0 && number < 33) {
        return "rock";
    } else if (number > 32 && number < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}
// Plays one round and returns a result. Please note that global variables are necessary for counting wins/losses 
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection.toLowerCase() == "rock" && computerSelection == "rock"):

            return "Tie!";
    
        case (playerSelection.toLowerCase() == "rock" && computerSelection == "paper"):
            ++computerWins
            return "You lose! Paper beats Rock";
    
        case (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"):
            ++playerWins
            return "You win! Rock beats Scissors";
    
        case (playerSelection.toLowerCase() == "paper" && computerSelection == "rock"):
            ++playerWins
            return "You win! Paper beats Rock";

        case (playerSelection.toLowerCase() == "paper" && computerSelection == "paper"):

            return "Tie!";

        case (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"):  
            ++computerWins
            return "You lose! Scissors beat Paper";

        case (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"):  
            ++computerWins
            return "You lose! Rock beats Scissors";

        case (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"):
            ++playerWins    
            return "You Win! Scissors beat Paper";    
        
        case (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors"):

            return "Tie!";    
    }
}
// Plays 5 rounds and finishes the game if it isnt a tie, otherwise it continues until someone wins
function game() {
    let gameCount = 0
    let roundMessage = ""
    while (true) {
        let playerChoice = prompt("Choose your warrior!")
        roundMessage = playRound(playerChoice, getComputerChoice())
        console.log(roundMessage)
        ++gameCount
        if (gameCount >= 5 && playerWins != computerWins) {
            let winnerMessage = (playerWins > computerWins) ? "You won the game! Congratulations! " : "You lost the game :("
            playerWins = 0
            computerWins = 0
            return winnerMessage;
        }
    }
}

const results = document.querySelector('.results')
const round = document.querySelector('.round')
const message = document.querySelector('.message')

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

rock.onclick = function () {
    if (playerWins == 0 || computerWins == 0) {
        message.textContent = ""
    }
    round.textContent = playRound("rock", getComputerChoice())
    results.textContent = `player: ${playerWins} machine: ${computerWins}`
    if (playerWins == 5 || computerWins == 5) {
        message.textContent = (playerWins > computerWins) ? "You won the game! Congratulations! Click any button above to start new game." : "You lost the game, click any button above to start new game."
        playerWins = 0
        computerWins = 0
    }
}
paper.onclick = function () {
    if (playerWins == 0 || computerWins == 0) {
        message.textContent = ""
    }
    round.textContent = playRound("paper", getComputerChoice())
    results.textContent = `player: ${playerWins} machine: ${computerWins}`
    if (playerWins == 5 || computerWins == 5) {
        message.textContent = (playerWins > computerWins) ? "You won the game! Congratulations! Click any button above to start new game." : "You lost the game, click any button above to start new game."
        playerWins = 0
        computerWins = 0
    }
}
scissors.onclick = function () {
    if (playerWins == 0 || computerWins == 0) {
        message.textContent = ""
    }
    round.textContent = playRound("scissors", getComputerChoice())
    results.textContent = `player: ${playerWins} machine: ${computerWins}`
    if (playerWins == 5 || computerWins == 5) {
        message.textContent = (playerWins > computerWins) ? "You won the game! Congratulations! Click any button above to start new game." : "You lost the game, click any button above to start new game."
        playerWins = 0
        computerWins = 0
    }
}
