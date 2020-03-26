
//import { Card } from "./card";

 class GameBoard {
    private deck: Deck;
    private player: Player;
    //private playerHand: Array<Card>;
    //private tossedCards: Array<Card>;
    private cardOneContent: HTMLElement;

    constructor() {
        this.deck = new Deck;
        this.player = new Player;

     
		// let cardTwoContent: HTMLElement;
		// let cardThreeContent: HTMLElement;

        this.cardOneContent = <HTMLElement> document.getElementById('card1');
        this.cardOneContent = document.getElementById('card1') as HTMLElement;
        // cardTwoContent = document.getElementById('card2');
        // cardThreeContent = document.getElementById('card3');
    
    //    this.playerHand = [];
    //    this.tossedCards = [];
    }
    
    restart() {
        let cardOne = document.getElementById('card1') as HTMLInputElement;
        this.deck.clearDeck();
        this.deck.fillDeck();
        for (let i = 0; i < 3; i++) {
		    this.player.drawCard(this.deck.getDeck());
		}
        console.log(this.deck.getDeck());
 

       
    }


    initialDrawCard(cards: number) {
        for (let i = 0; i<cards; i++) {
            this.player.drawCard(this.deck.getDeck());
        }
    }

    tossedCard(i: number) {
        this.player.tossCard(i);
    }  

    // cardTwo: Card, cardThree: Card

    cardUpdate(cardOne: Card){
        let contentOne = cardOne.getSuit();

        // this.cardOneContent.innerHTML = cardOne;
        // this.cardTwoContent.innerHTML = cardTwo;
        // this.cardThreeContent.innerHTML = cardThree;
	}
}
