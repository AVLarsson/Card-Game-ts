
//import { Card } from "./card";

 class GameBoard {
    private deck: Deck;
    private player: Player;
    //private playerHand: Array<Card>;
    //private tossedCards: Array<Card>;
    
    constructor() {
        this.deck = new Deck;
        this.player = new Player;
    //    this.playerHand = [];
    //    this.tossedCards = [];
    }
    
    restart() {
        this.deck.clearDeck();
        this.deck.fillDeck();
    }

    initialDrawCard(cards: number) {
        for (let i = 0; i<cards; i++) {
            this.player.drawCard(this.deck.getDeck());
        }
    }

    tossedCard(i: number) {
        this.player.tossCard(i);
    }  
}
