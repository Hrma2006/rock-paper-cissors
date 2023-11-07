//Some variables to change the text on the screen
const pRounds = document.querySelector(".player-score").innerHTML;
const rRounds = document.querySelector(".robot-score").innerHTML;
//robot buttons
const computerFire = document.querySelector(".r-fire").style;
const computerWater = document.querySelector(".r-water").style;
const computerGrass = document.querySelector(".r-grass").style;
//player buttons
const playerFire = document.querySelector("#p-fire").style;
const playerWater = document.querySelector("#p-water").style;
const playerGrass = document.querySelector("#p-grass").style;

function getComputerChoice() {
	let options = ["Fire", "Water", "Grass"];
	let random = Math.floor(Math.random() * options.length);
	let chosen = options[random];
	showComputer(chosen);
	return chosen;
}
// A function to get the player choice
function getPlayerChoice() {
	let selectedButton;
	// Get all buttons with the ".p-option" class.
	const buttons = document.querySelectorAll(".p-option");
	// Add a click event listener to each button.
	buttons.forEach((button) => {
		button.addEventListener("click", function () {
			// Determine which button was clicked by its id.
			if (button.id === "p-fire") {
				selectedButton = "Fire";
			} else if (button.id === "p-water") {
				selectedButton = "Water";
			} else if (button.id === "p-grass") {
				selectedButton = "Grass";
			}
      showPlayer(selectedButton)
			playGame(selectedButton);
		});
	});
}

function playGame(selected) {
	let computer = getComputerChoice();
	console.log(`You selected ${selected}`);
	console.log(`Computer selected ${computer}`);
  
}
// change the color of the computer selected button
function showComputer(option) {
	if (/fire/i.test(option)) {
		computerFire.color = "var(--fire)";
		computerFire.boxShadow = "0 0 10px 5px var(--fire)";
		computerGrass.color = "";
		computerGrass.boxShadow = "";
		computerWater.color = "";
		computerWater.boxShadow = "";
	} else if (/Grass/i.test(option)) {
    computerFire.color = "";
		computerFire.boxShadow = "";
		computerGrass.color = "var(--grass)";
		computerGrass.boxShadow = "0 0 10px 5px var(--grass)";
    computerWater.color="";
    computerWater.boxShadow="";
	} else {
    computerFire.color = "";
		computerFire.boxShadow = "";
		computerGrass.color = "";
		computerGrass.boxShadow = "";
    computerWater.color="var(--water)";
    computerWater.boxShadow="0 0 10px 5px var(--water)";
	}
}
function showPlayer(option){
  if (/fire/i.test(option)) {
		playerFire.color = "var(--fire)";
		playerFire.boxShadow = "0 0 10px 5px var(--fire)";
		playerGrass.color = "";
		playerGrass.boxShadow = "";
		playerWater.color = "";
		playerWater.boxShadow = "";
	} else if (/Grass/i.test(option)) {
    playerFire.color = "";
		playerFire.boxShadow = "";
		playerGrass.color = "var(--grass)";
		playerGrass.boxShadow = "0 0 10px 5px var(--grass)";
    playerWater.color="";
    playerWater.boxShadow="";
	} else {
    playerFire.color = "";
		playerFire.boxShadow = "";
		playerGrass.color = "";
		playerGrass.boxShadow = "";
    playerWater.color="var(--water)";
    playerWater.boxShadow="0 0 10px 5px var(--water)";}
}
getPlayerChoice();
f