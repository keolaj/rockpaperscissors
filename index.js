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

function runGame(userChoice, computerChoice) {
	if (userChoice === "Rock" && computerChoice === "Scissors") {
		return "You Win!!"
	}
	if (userChoice === "Paper" && computerChoice === "Rock") {
		return "You Win!!"
	}
	if (userChoice === "Scissors" && computerChoice === "Paper") {
		return "You Win!!"
	}
	if (userChoice === "Rock" && computerChoice === "Paper") {
		return "You Lose!!"
	}
	if (userChoice === "Paper" && computerChoice === "Scissors") {
		return "You Lose!!"
	}
	if (userChoice === "Scissors" && computerChoice === "Rock") {
		return "You Lose!!"
	}
	if (userChoice === computerChoice) {
		return "You Tie!!"
	}
}

document.querySelector(".button-section").childNodes.forEach((node) => {
	node.addEventListener("click", () => {
		let winText = runGame(node.textContent, getComputerChoice());
		let textSection = document.querySelector(".text-section");
		let text = textSection.textContent;
		textSection.textContent = text + '\n' + winText;

	})
})