// import { Card } from "./card";
//import { Deck } from "./deck";

 class Player {

    private cardsInHand: Array<Card>;
    private rank: number;
    private suit: number;

    //private deck: Deck;
    
 /*hej*/
    
    constructor() {
        //this.deck = new Deck();
        this.cardsInHand = [];
        this.rank = 0;
        this.suit = 0;
        
    }
    
    /** Hämtar det sista elementet i cards och tar samtidigt bort respektive index. */
    drawCard(array: Array<Card>) {
        this.cardsInHand.push(array.pop()!);
        this.cardsInHand[this.cardsInHand.length-1].makeFaceUp(true);
        return(this.cardsInHand);
    }

    clearCardsInHand(){
        this.cardsInHand = [];
    }
    

    tossCard(i: number) {
        this.cardsInHand.splice(i, 1);
    }

    getCardInHand(i:number){
        // console.log("card:");
        // console.log(this.cardsInHand[i]);
        let cardInfo = [this.cardsInHand[i].getRank(), this.cardsInHand[i].getSuit()];
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
        
        
        // this.rank = this.cardsInHand[i].getRank();
        // this.suit = this.cardsInHand[i].getSuit();

        // console.log("CardInHand position " + i + " rank:");        
        // console.log(this.rank);
        
        // console.log("CardInHand position " + i + " suit:");        
        // console.log(this.suit);    
    
        return(cardInfoStr);
    //     if (i >= 0 && i <= 2) {
    //          return(this.cardsInHand[i]);
    //     }
    //    else{
    //        return -1;
    //    }
    }
}
