// use == when you want "undefined == null" to be true

let playerPoints = 0;
let computerPoints = 0;
const placeholder = " ";


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
  const prevResults = document.querySelector("#resultsDiv");
  if (prevResults) {
    prevResults.remove();
  }
  const resultsSection = document.querySelector("#results-section");
  const resultsDiv = document.createElement("div");
  resultsDiv.id = "resultsDiv";
  if (playerChoice && computerChoice) {
    resultsDiv.innerText = `${playerChoice} - ${computerChoice}`;
  } else {
    resultsDiv.innerText = " - ";
  }
  resultsDiv.style.fontSize = "1.5em";
  resultsDiv.style.color = "white";
  resultsDiv.style.fontFamily = "Arial, sans-serif";
  resultsDiv.style.marginTop = "5px";
  resultsSection.appendChild(resultsDiv);

  const prevResult = document.querySelector("#game-result");
  if (prevResult) {
    prevResult.remove();
  }
  const outcome = document.createElement("div");
  outcome.id = "game-result";
  if (playerChoice && computerChoice) {
    outcome.innerText = gameResults(playerChoice, computerChoice);
  } else {
    outcome.innerText = placeholder;
  }
  outcome.style.fontSize = "1.5em";
  outcome.style.color = "white";
  outcome.style.fontFamily = "Arial, sans-serif";
  outcome.style.marginTop = "20px";
  resultsSection.appendChild(outcome);
}

function displayScore() {
  // previous div with score needs to be removed to avoid multiple elements
  const prevPlayerScore = document.getElementById("playerCurrScore");
  if (prevPlayerScore) {
    prevPlayerScore.remove();
  }
  const playerScoreCard = document.querySelector("#playerScoreCard");
  const score = document.createElement("div");
  score.id = "playerCurrScore";
  score.innerText = playerPoints;
  score.style.fontSize = "4em";
  score.style.color = "white";
  playerScoreCard.appendChild(score);


  const prevComputerScore = document.getElementById("computerCurrentScore");
  if (prevComputerScore) {
    prevComputerScore.remove()
  }
  const computerScoreCard = document.querySelector("#computerScoreCard");
  const computerScore = document.createElement("div");
  computerScore.id = "computerCurrentScore";
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
        return "tie";
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
        return "tie";
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
        return "tie";
      }
  }
}

displayScore();
displayResults();