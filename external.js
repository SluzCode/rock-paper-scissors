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



let playerChoice = getPlayerChoice()

/*  

for (let index = 0; index < 10; index++) {
  
  randomChoice()
}



*/





