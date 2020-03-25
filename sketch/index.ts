/// <reference path="./player.ts" />
//import { GameBoard } from "./gameBoard"
// import { Deck } from "./deck";
//import { Card } from "./card";
// import { Player } from "./player"

class Index {
	private deck: Deck;
	private player: Player;

	constructor() {
		this.deck = new Deck();
		this.player = new Player();
		this.newGame();
	}
	newGame() {
		this.deck.fillDeck();
		console.log(this.deck);

		console.log('Annies kortspel');

		console.log('Player drew:');
		for (let i = 0; i < 5; i++) {
			this.player.drawCard(this.deck.getDeck());
		}
		console.log(this.player.cardsInHand);
		this.player.tossCard(1);
		console.log('player toss away index 1');
		console.log(this.player.cardsInHand);

		console.log(this.deck.getDeck().length);
	}
}

let newGame;
window.addEventListener('load', () => {newGame = new Index});
