function randomChoice(){
  
  const value = Math.floor(3*Math.random());
  

  const choice = ["Rock", "Paper", "Scissors"];
  // console.log(value)
  // console.log(choice[value])

  return choice[value]
 
}


function getComputerChoice() {

return randomChoice()

}

function getPlayerChoice() {
  let playerInput = prompt("Make your selection:", "Rock, Paper, or Scissors");
  
  const choices = ["Rock", "Paper", "Scissors"];

  let playerChoice = "";

  switch(playerInput[0].toLowerCase()) {
    case "r":
     playerChoice = choices[0];
      break;
    case "p":
      playerChoice = choices[1];
      break;
    case "s":
      playerChoice = choices[2];
      break;
    
    default:
      alert("Learn to type")
  }

  // console.log(playerChoice)

  return playerChoice
}

// let playerSelection = getPlayerChoice();
// const computerSelection = getComputerChoice();
// playRound(playerSelection, computerSelection)



function playRound(playerSelection, computerSelection) {

  let result = "";

if (playerSelection[0] === computerSelection[0]) {
    result = "you tied!"
  
} else if (playerSelection === "Rock"){
  if (computerSelection === "Scissors"){
    result = "you win!"
  }
  else{
    result = "you lose!"
  }
}
  else if (playerSelection === "Paper"){
  if (computerSelection === "Rock"){
    result = "you win!"
  }
  else{
    result = "you lose!"
  }
}

else if (playerSelection === "Scissors"){
  if (computerSelection === "Paper"){
    result = "you win!"
  }
  else{
    result = "you lose!"
  }
}

console.log("You played " + playerSelection + " and the computer played " + computerSelection + ", " + result)

let outcome = ("You played " + playerSelection + " and the computer played " + computerSelection + ", " + result)

return outcome
}


// playRound(playerSelection, computerSelection)


function clickToPlay(){

let playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let outcome = playRound(playerSelection, computerSelection)

document.getElementById("output-text").innerHTML = outcome;

}



/*  

for (let index = 0; index < 10; index++) {
  
  randomChoice()
}



*/





