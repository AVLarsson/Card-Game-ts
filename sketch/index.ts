
class Index {
	private deck: Deck;
	private player: Player;
	private gameBoard: GameBoard;

	constructor() {
		this.deck = new Deck();
		this.player = new Player();
		this.gameBoard = new GameBoard();
	

		let restartBtn = document.getElementById('restart')!;
		restartBtn.addEventListener('click', () => this.gameBoard.restart());

		let plusBtn = document.getElementById('increment')!;
		plusBtn.addEventListener('click', () => this.gameBoard.increment());

		let minusBtn = document.getElementById('decrement')!;
		minusBtn.addEventListener('click', () => this.gameBoard.decrement());

		let tossBtn = document.getElementById('toss')!;
		tossBtn.addEventListener('click', () => this.gameBoard.tossedCard());
	}
}

/*
* Initiates the class index when the page is fully loaded.
*/
let newGame;
window.addEventListener('load', () => {newGame = new Index});
