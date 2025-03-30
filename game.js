// for(let i = 0; i < 5 ; i++){
//   const userInput = getHumanChoice();
//   const computerInput = getComputerChoice();
//   console.log("player choice:", userInput);
//   console.log("computer choice:", computerInput);
//   console.log("Results:", compare(userInput, computerInput));
// }

// use == when you want "undefined == null" to be true

let playerPoints = 0;
let computerPoints = 0;

document.querySelectorAll(".selection").forEach((button) => {
  button.addEventListener("click", playGame);
});

function playGame(e) {
  const playerChoice = e.target.getAttribute("data-choice");
  const computerChoice = getComputerChoice();
  const results = gameResults(playerChoice, computerChoice);
  if (results === "win") {
    playerPoints++;
  } else if (results === "lose") {
    computerPoints++;
  }
  displayResults(playerChoice, computerChoice);
  displayScore();
}

function recordWin() {
  playerPoints++;
  displayScore();
}

function recordLoss() {
  computerPoints++;
  displayScore();
}

function displayResults(playerChoice, computerChoice) {
  const resultsSection = document.querySelector("#results-section");
  const resultsDiv = document.createElement("div");
  resultsDiv.innerText = `${playerChoice} - ${computerChoice}`;
  resultsDiv.style.fontSize = "larger";
  resultsDiv.style.color = "white";
  resultsSection.appendChild(resultsDiv);
}

function displayScore() {
  const playerScoreCard = document.querySelector("#playerScoreCard");
  const score = document.createElement("div");
  score.innerText = playerPoints;
  score.style.fontSize = "4em";
  score.style.color = "white";
  playerScoreCard.appendChild(score);

  const computerScoreCard = document.querySelector("#computerScoreCard");
  const computerScore = document.createElement("div");
  computerScore.innerText = computerPoints;
  computerScore.style.fontSize = "4em";
  computerScore.style.color = "white";
  computerScoreCard.appendChild(computerScore);
}

function getComputerChoice() {
  const choice = Math.random();
  if (choice < 0.33) return "rock";
  else if (choice < 0.66) return "paper";
  else return "scissors";
}

function getHumanChoice() {
  let choice = prompt("rock, paper, or scissors?").toLowerCase();
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("ERROR: choose ONLY 'rock', 'paper', or 'scissors'").toLowerCase();
  }
  return choice;
}

function gameResults(playerInput, computerChoice) {
  switch (playerInput) {
    case "rock":
      if (computerChoice === "rock") {
        return "draw";
      }
      else if (computerChoice === "paper") {
        return "lose";
      } else {
        return "win";
      }
    case "paper":
      if (computerChoice === "rock") {
        return "win";
      }
      else if (computerChoice === "paper") {
        return "draw";
      } else {
        return "lose";
      }

    case "scissors":
      if (computerChoice === "rock") {
        return "lose";
      }
      else if (computerChoice === "paper") {
        return "win";
      } else {
        return "draw";
      }
  }
}

displayScore();