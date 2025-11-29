const choice = Math.floor(Math.random() * 3);
function getComputerChoice(choice) {
    if (choice === 2) {
       return "Scissors"
    } else if (choice === 1) {
        return "Paper"
    } else {
        return "Rock"
    }
}

let compChoice = getComputerChoice(choice)

console.log(compChoice)