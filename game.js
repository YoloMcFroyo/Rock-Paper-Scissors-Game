
for(let i = 0; i < 5 ; i++){
  const userInput = getHumanChoice();
  const computerInput = getComputerChoice();
  console.log("player choice:", userInput);
  console.log("computer choice:", computerInput);
  console.log("Results:", compare(userInput, computerInput));
}

function getComputerChoice(){
  const choice = Math.random();
  if(choice < 0.33) return "rock";
  else if(choice < 0.66) return "paper";
  else return "scissors";
}

// use == when you want "undefined == null" to be true

function getHumanChoice(){
  let choice = prompt("rock, paper, or scissors?").toLowerCase();
  while(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
    choice = prompt("ERROR: choose ONLY 'rock', 'paper', or 'scissors'").toLowerCase();
  }
  return choice;
}

function compare(playerInput, computerChoice){
  switch(playerInput){
    case "rock": 
      if(computerChoice === "rock")
      {
        return "tie";
      }
      else if(computerChoice === "paper")
      {
        return "loser! xD";
      }else
      {
        return "winner!";
      }
    case "paper":
      if(computerChoice === "rock")
      {
        return "winner!";
      }
      else if(computerChoice === "paper")
      {
        return "tie";
      }else
      {
        return "loser! xD";
      }

    case "scissors":
      if(computerChoice === "rock")
      {
        return "loser! xD";
      }
      else if(computerChoice === "paper")
      {
        return "winner!";
      }else
      {
        return "tie";
      }
  }
}