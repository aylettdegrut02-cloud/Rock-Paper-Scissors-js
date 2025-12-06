const moves = ["rock", "paper", "scissors"];

function getHumanChoice() {
    const humanChoice = prompt("What do you pick rock, paper or scissors?")
    let humanStrChoice = humanChoice.toLowerCase();
    return [humanStrChoice, moves.indexOf(humanStrChoice)]
}

let [humanStrChoice, humanIntChoice] = getHumanChoice()

console.log(humanStrChoice)

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