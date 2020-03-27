class Player {
	private cardsInHand: Array<Card>;
	private rank: number;
	private suit: number;
	private deck: Deck;

	constructor() {
		this.deck = new Deck();
		this.cardsInHand = [];
		this.rank = 0;
		this.suit = 0;
	}

	/*
    * Transfers the last element of the argument array to the last avaliable index in player hand.
    */
	drawCard(array: Array<Card>) {
		this.cardsInHand.push(array.pop()!);
		this.cardsInHand[this.cardsInHand.length - 1].makeFaceUp(true);
		return this.cardsInHand;
	}

	clearCardsInHand() {
		this.cardsInHand = [];
	}

	tossCard(i: number) {
		this.cardsInHand.splice(i, 1);
	}

	getCardsInHand() {
		return this.cardsInHand;
	}

    /*
    * Gets the card rank and suit. Then transforms the nummeric array cardInfo to string.
    * Sets the appropiate icons for the respective suits and ranks.
    * Returns the string array.
    */
	getCardInHand(i: number) {
		let cardInfo = [ this.cardsInHand[i].getRank(), this.cardsInHand[i].getSuit() ];

		let cardInfoStr = cardInfo.map(String);

		switch (cardInfoStr[0]) {
			case '1':
				cardInfoStr[0] = 'A';
				break;
			case '11':
				cardInfoStr[0] = 'Kn';
				break;
			case '12':
				cardInfoStr[0] = 'Q';
				break;
			case '13':
				cardInfoStr[0] = 'K';
				break;
			default:
				break;
		}

		switch (cardInfoStr[1]) {
			case '0':
				cardInfoStr[1] = '♥';
				break;
			case '1':
				cardInfoStr[1] = '♦';
				break;
			case '2':
				cardInfoStr[1] = '♠';
				break;
			case '3':
				cardInfoStr[1] = '♣';
				break;

			default:
				break;
		}

		return cardInfoStr;
	}
}
