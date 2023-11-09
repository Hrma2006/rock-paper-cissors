//Some variables to change the text on the screen
//variables to each round won by the player
let pRounds = document.querySelector(".player-score");
let pRoundNum = 0;
//variables to each round won by the robot
let rRounds = document.querySelector(".robot-score");
let rRoundNum = 0;

let note = document.querySelector(".note");

//variables to each game won by player
let pPoints = document.querySelector(".p-points");
let pPointsNum = 0;

//variables to each game won by robot
let rPoints = document.querySelector(".r-points");
let rPointsNum = 0;

let playAgain = document.querySelector(".play-again");
//variables to show the chosen options on the screen

//player
let playerPlayed = document.querySelector(".p-played");

//robot
let rPlayed = document.querySelector(".r-played");

//robot buttons
const robotFire = document.querySelector(".r-fire").style;
const robotWater = document.querySelector(".r-water").style;
const robotGrass = document.querySelector(".r-grass").style;
//player buttons
const playerFire = document.querySelector("#p-fire").style;
const playerWater = document.querySelector("#p-water").style;
const playerGrass = document.querySelector("#p-grass").style;

let playedContainer = document.querySelector(".played-container");
let playedElements = document.querySelectorAll(".played");

function getRobotChoice() {
	let options = ["Fire", "Water", "Grass"];
	let random = Math.floor(Math.random() * options.length);
	let chosen = options[random];
	showRobot(chosen);
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
			showPlayer(selectedButton);
			playGame(selectedButton);
		});
	});
}

function playGame(selected) {
	let robot = getRobotChoice();
	console.log(`You selected ${selected}`);
	console.log(`Robot selected ${robot}`);
	note.innerHTML = compareChoices(selected, robot);
	createHistory(selected, robot);
	console.log(note.innerHTML);
}
// change the color of the robot selected button
function showRobot(option) {
	if (/fire/i.test(option)) {
		robotFire.color = "var(--fire)";
		robotFire.boxShadow = "0 0 10px 5px var(--fire)";
		robotGrass.color = "";
		robotGrass.boxShadow = "";
		robotWater.color = "";
		robotWater.boxShadow = "";
	} else if (/Grass/i.test(option)) {
		robotFire.color = "";
		robotFire.boxShadow = "";
		robotGrass.color = "var(--grass)";
		robotGrass.boxShadow = "0 0 10px 5px var(--grass)";
		robotWater.color = "";
		robotWater.boxShadow = "";
	} else {
		robotFire.color = "";
		robotFire.boxShadow = "";
		robotGrass.color = "";
		robotGrass.boxShadow = "";
		robotWater.color = "var(--water)";
		robotWater.boxShadow = "0 0 10px 5px var(--water)";
	}
}
function showPlayer(option) {
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
		playerWater.color = "";
		playerWater.boxShadow = "";
	} else {
		playerFire.color = "";
		playerFire.boxShadow = "";
		playerGrass.color = "";
		playerGrass.boxShadow = "";
		playerWater.color = "var(--water)";
		playerWater.boxShadow = "0 0 10px 5px var(--water)";
	}
}

// a function to change the onscreen rounds won by player
function playerWon() {
	pRoundNum += 1;
	pRounds.innerHTML = pRoundNum;
	return rRoundNum;
}

// a function to change the onscreen rounds won by robot
function robotWon() {
	rRoundNum += 1;
	rRounds.innerHTML = rRoundNum;
	return rRoundNum;
}

// a function to increase the games won by player
function playerPointsPlus() {
	pPointsNum += 1;
	pPoints.innerHTML = pPointsNum;
}
// a function to increase the games won by robot
function robotPointsPlus() {
	rPointsNum += 1;
	rPoints.innerHTML = rPointsNum;
}

// a function to compare choices
function compareChoices(player, robot) {
	//draw
	if (player === robot) {
		return `*you both chose ${player} it is a Draw*`;
	}
	//wins
	else if (/fire/i.test(player) && /grass/i.test(robot)) {
		playerPointsPlus();
		return `*${player} burns ${robot} you Won*`;
	} else if (/water/i.test(player) && /fire/i.test(robot)) {
		playerPointsPlus();
		return `*${player} puts down ${robot} you Won*`;
	} else if (/grass/i.test(player) && /water/i.test(robot)) {
		playerPointsPlus();
		return `*${player} absorbs ${robot} you won*`;
	}
	//loses
	else if (/grass/i.test(player) && /fire/i.test(robot)) {
		robotPointsPlus();
		return `*${robot} burns ${player} you Lost*`;
	} else if (/fire/i.test(player) && /water/i.test(robot)) {
		robotPointsPlus();
		return `*${robot} puts down ${player} you Lost*`;
	} else if (/water/i.test(player) && /grass/i.test(robot)) {
		robotPointsPlus();
		return `*${robot} absorbs ${player} you Lost*`;
	}
}
function createHistory(player, robot) {
	const playedElement = document.createElement("div");
	playedElement.classList.add("played");

	// Create the child elements
	const pPlayedElement = document.createElement("span");
	pPlayedElement.classList.add("p-played");
	pPlayedElement.textContent = player;

	const compareElement = document.createElement("span");
	compareElement.classList.add("compare");
	let operator = makeCompare(player, robot);
	compareElement.textContent = operator;

	const rPlayedElement = document.createElement("span");
	rPlayedElement.classList.add("r-played");
	rPlayedElement.textContent = robot;

	// Append the child elements to the .played element
	playedElement.appendChild(pPlayedElement);
	playedElement.appendChild(compareElement);
	playedElement.appendChild(rPlayedElement);

	// Append the .played element to the .played-container
	playedContainer.appendChild(playedElement);
}
// a function to show played choices
function makeCompare(player, robot) {
	let operator;
	if (player === robot) {
		operator = "=";
	} else if (/fire/i.test(player) && /grass/i.test(robot)) {
		operator = ">";
	} else if (/water/i.test(player) && /fire/i.test(robot)) {
		operator = ">";
	} else if (/grass/i.test(player) && /water/i.test(robot)) {
		operator = ">";
	}
	//loses
	else if (/grass/i.test(player) && /fire/i.test(robot)) {
		operator = "<";
	} else if (/fire/i.test(player) && /water/i.test(robot)) {
		operator = "<";
	} else if (/water/i.test(player) && /grass/i.test(robot)) {
		operator = "<";
	}
	return operator;
}
//reset the games won
playAgain.addEventListener("click", () => {
	pPointsNum = 0;
	pPoints.innerHTML = pPointsNum;

	rPointsNum = 0;
	rPoints.innerHTML = rRoundNum;
	removePlayed();
	playAgain.style.scale = "0";
});
function removePlayed() {
	let playedContainer = document.querySelector(".played-container");
	let playedElements = document.querySelectorAll(".played");

	playedElements.forEach((playedElement) => {
		playedContainer.removeChild(playedElement);
	});
}

getPlayerChoice();
