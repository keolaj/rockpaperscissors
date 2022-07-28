function getRandIntFromRange(low, high) {
	return Math.floor(((Math.random() * (high - low + 1)) + low));
}

function getComputerChoice() {
	switch(getRandIntFromRange(1, 3)) {
		case 1:
			return "Rock";
		case 2:
			return "Paper";
		case 3:
			return "Scissors";
	}
}

