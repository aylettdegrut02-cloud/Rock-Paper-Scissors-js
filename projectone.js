const moves = ["rock", "paper", "scissors"];

function getHumanChoice() {
    const humanChoice = prompt("What do you pick rock, paper or scissors?")
    let humanStrChoice = humanChoice.toLowerCase();
    return [humanStrChoice, moves.indexOf(humanStrChoice)]
}

let [humanStrChoice, humanIntChoice] = getHumanChoice()

console.log(humanStrChoice)

function getComputerChoice() {
    let compIntChoice = Math.floor(Math.random() * 3);
    let compStrChoice = moves[compIntChoice]
    return [compIntChoice, compStrChoice]
}

let [compIntChoice, compStrChoice] = getComputerChoice()

console.log(compStrChoice)

function playRound(humanIntChoice, compIntChoice) {
    const beats = [2, 0, 1];

    if (humanIntChoice === compIntChoice) {
        return `${compStrChoice} and ${humanStrChoice} its a tie.`
    }

    else if (beats[humanIntChoice] === compIntChoice) {
        return `You Win! ${humanStrChoice} beats ${compStrChoice}`
    }

    else {
        return `You Lose! ${compStrChoice} beats ${compStrChoice}`
    }
}
