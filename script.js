const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const result = document.getElementById("result");
const moves = document.getElementById("moves");

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    moves.textContent =
        "You chose " + userChoice +
        " | Computer chose " + computerChoice;

    if (userChoice === computerChoice) {
        result.textContent = "It's a Draw! 🤝";
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result.textContent = "You Win! 🎉";
    }
    else {
        result.textContent = "Computer Wins! 🤖";
    }
}

rock.addEventListener("click", function() {
    playGame("rock");
});

paper.addEventListener("click", function() {
    playGame("paper");
});

scissors.addEventListener("click", function() {
    playGame("scissors");
});