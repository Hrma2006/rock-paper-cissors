//Some variables to change the text on the screen
//variables to each round won by the player
let pRounds = document.querySelector(".player-score");
let pRoundNum = 0;
//variables to each round won by the robot
let rRounds = document.querySelector(".robot-score");
let rRoundNum = 0;
let note = document.querySelector(".note");

//variables to each game won by player
let pPoints=document.querySelector(".p-points")
let pPointsNum=0;

//variables to each game won by robot
let rPoints=document.querySelector(".r-points")
let rPointsNum=0;

//variables to show the chosen options on the screen

//player
let playerPlayed=document.querySelector(".p-played")

//robot 
let rPlayed=document.querySelector(".r-played")

//robot buttons
const robotFire = document.querySelector(".r-fire").style;
const robotWater = document.querySelector(".r-water").style;
const robotGrass = document.querySelector(".r-grass").style;
//player buttons
const playerFire = document.querySelector("#p-fire").style;
const playerWater = document.querySelector("#p-water").style;
const playerGrass = document.querySelector("#p-grass").style;

function getrobotChoice() {
	let options = ["Fire", "Water", "Grass"];
	let random = Math.floor(Math.random() * options.length);
	let chosen = options[random];
	showrobot(chosen);
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
	let robot = getrobotChoice();
	console.log(`You selected ${selected}`);
	console.log(`robot selected ${robot}`);
  note.innerHTML=compareChoices(selected,robot);
  
}
// change the color of the robot selected button
function showrobot(option) {
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
getPlayerChoice();

// a function to change the onscreen rounds won by player
function playerWon() {
	pRoundNum += 1;
	pRounds.innerHTML = pRoundNum;
	console.log(pRoundNum, pRounds);
}

// a function to change the onscreen rounds won by robot
function robotWon() {
	rRoundNum += 1;
	rRounds.innerHTML = rRoundNum;
	console.log(pRoundNum, pRounds);
}

// a function to increase the games won by player
function playerPintsPlus(){
  pPointsNum+=1;
  pPoints.innerHTML=pPointsNum;
}
// a function to compare choices
function compareChoices(player,robot){
  //draw
  if (player===robot){
    return (`*you both chose ${player} it is a Draw*`)
  }
  //wins
  else if(/fire/i.test(player)&&/grass/i.test(robot)){
    return (`*${player} burns ${robot} you Won*`)
  }
  else if(/water/i.test(player)&&/fire/i.test(robot)){
    return (`*${player} puts down ${robot} you Won*`)
  }
  else if(/grass/i.test(player)&&/water/i.test(robot)){
    return (`*${player} absorbs ${robot} you won*`)
  }
  //loses
  else if(/grass/i.test(player)&&/fire/i.test(robot)){
    return (`*${robot} burns ${player} you Lost*`)
  }
  else if(/fire/i.test(player)&&/water/i.test(robot)){
    return (`*${robot} puts down ${player} you Lost*`)
  }
  else if(/water/i.test(player)&&/grass/i.test(robot)){
    return (`*${robot} absorbs ${player} you Lost*`)
  }

}