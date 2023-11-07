//Some variables to change the text on the screen
const pRounds=document.querySelector(".player-score").innerHTML
const rRounds=document.querySelector(".robot-score").innerHTML

function getComputerChoice() {
	let options=["Fire","Water","Earth"]
	let random = Math.floor(Math.random() * options.length);
	return (options[random])
}
// A function to get the player choice
function getPlayerChoice(){
	let selectedButton;
// Get all buttons with the ".p-option" class.
const buttons = document.querySelectorAll('.p-option');
// Add a click event listener to each button.
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Determine which button was clicked by its id.
    if (button.id === 'p-fire') {
      selectedButton = 'Fire';
    } else if (button.id === 'p-water') {
      selectedButton = 'Water';
    } else if (button.id === 'p-earth') {
      selectedButton = 'Earth';
    }
		playGame(selectedButton)
  });
});
}

function playGame(selected){
  let computer=getComputerChoice();
	console.log(`You selected ${selected}`)
	console.log(`The computer selected ${computer}`)
  
}
getPlayerChoice()



