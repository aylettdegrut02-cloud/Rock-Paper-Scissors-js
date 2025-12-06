const moves = ["rock", "paper", "scissors"];




function getHumanChoice(humanChoice) {
    if (humanChoice = "rock")
        return 0
    else if (humanChoice = "paper")
        return 1
    else if (humanChoice = "scissors")
        return 2
}

let finalHumanChoice = getHumanChoice(humanChoice)

console.log(finalHumanChoice)

const choice = Math.floor(Math.random() * 3);
function getComputerChoice(choice) {
    if (choice === 2) {
       return "scissors"
    } else if (choice === 1) {
        return "paper"
    } else {
        return "rock"
    }
}

let compChoice = getComputerChoice(choice)

console.log(compChoice)