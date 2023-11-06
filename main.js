const playerROundPints = document.querySelector(".player-score");
const fire = document.querySelector(".p-fire");
const water = document.querySelector(".p-water");
const earth = document.querySelector(".p-earth");

function getComputerChoice() {
	let random = Math.floor(Math.random() * 3);
	let choice;
	switch (random) {
		case 0:
			choice = "FIRE";
			break;

		case 1:
			choice = "WATER";
			break;
		case 2:
			choice = "EARTH";
			break;
		default:
			break;
	}
  return choice;
}


