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



/*  

for (let index = 0; index < 10; index++) {
  
  randomChoice()
}



*/





