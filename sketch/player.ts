// import { Card } from "./card";
//import { Deck } from "./deck";

 class Player {

    private cardsInHand: Array<Card>;
    //private deck: Deck;
    
 /*hej*/
    
    constructor() {
        //this.deck = new Deck();
        this.cardsInHand = [];
    }
    
    /** Hämtar det sista elementet i cards och tar samtidigt bort respektive index. */
    drawCard(array: Array<Card>) {
        this.cardsInHand.push(array.pop()!);
        this.cardsInHand[this.cardsInHand.length-1].makeFaceUp(true);
        return(this.cardsInHand);
    }
    

    tossCard(i: number) {
        this.cardsInHand.splice(i, 1);
    }
}
