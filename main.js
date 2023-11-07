//Some variables to change the text on the screen
const pRounds = document.querySelector(".player-score").innerHTML;
const rRounds = document.querySelector(".robot-score").innerHTML;
const computerFire = document.querySelector(".r-fire").style;
const computerWater = document.querySelector(".r-water").style;
const computerEarth = document.querySelector(".r-earth").style;

function getComputerChoice() {
	let options = ["Fire", "Water", "Earth"];
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
			} else if (button.id === "p-earth") {
				selectedButton = "Earth";
			}
			playGame(selectedButton);
		});
	});
}

function playGame(selected) {
	let computer = getComputerChoice();
	console.log(`You selected ${selected}`);
	console.log(`The computer selected ${computer}`);
}
// change the color of the computer selected button
function showComputer(option) {
	if (/fire/i.test(option)) {
		computerFire.color = "var(--fire)";
		computerFire.boxShadow = "0 0 10px 5px var(--fire)";
		computerEarth.color = "";
		computerEarth.boxShadow = "";
		computerWater.color = "";
		computerWater.boxShadow = "";
	} else if (/earth/i.test(option)) {
    computerFire.color = "";
		computerFire.boxShadow = "";
		computerEarth.color = "var(--earth)";
		computerEarth.boxShadow = "0 0 10px 5px var(--earth)";
    computerWater.color="";
    computerWater.boxShadow="";
	} else {
    computerFire.color = "";
		computerFire.boxShadow = "";
		computerEarth.color = "";
		computerEarth.boxShadow = "";
    computerWater.color="var(--water)";
    computerWater.boxShadow="0 0 10px 5px var(--water)";
	}
}
function showPlayer() {}
getPlayerChoice();
