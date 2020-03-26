
//import { Card } from "./card";

 class GameBoard {
    private deck: Deck;
    private player: Player;
    private counter: number;
    private selected1: HTMLInputElement;
    private selected2: HTMLInputElement;
    private selected3: HTMLInputElement;
    //private playerHand: Array<Card>;
    //private tossedCards: Array<Card>;
    // private cardOneContent: HTMLElement;

    constructor() {
        this.deck = new Deck;
        this.player = new Player;
        this.counter = 1;
        this.selected1 = document.getElementById('selected1') as HTMLInputElement;
        this.selected2 = document.getElementById('selected2') as HTMLInputElement;
        this.selected3 = document.getElementById('selected3') as HTMLInputElement;
    }
    
    restart() {
        let cardOne = document.getElementById('card1') as HTMLInputElement;
        let cardTwo = document.getElementById('card2') as HTMLInputElement;
        let cardThree = document.getElementById('card3') as HTMLInputElement;
     
        this.selected1.style.display = 'inline';
        this.selected2.style.display = 'none';
        this.selected3.style.display = 'none';

        this.deck.clearDeck();
        this.player.clearCardsInHand();
        this.deck.fillDeck();
        for (let i = 0; i < 3; i++) {
		    this.player.drawCard(this.deck.getDeck());
		}
        console.log(this.deck.getDeck());
 

       console.log(this.cardUpdate());
        cardOne.innerHTML = this.player.getCardInHand(0).join(' ');
        cardTwo.innerHTML = this.player.getCardInHand(1).join(' ');
        cardThree.innerHTML = this.player.getCardInHand(2).join(' ');
       
    }

    increment(){
        if(this.counter > 2){
        } else {
            this.counter++;
        }
        switch (this.counter) {
            case 1:
                this.selected1.style.display = 'inline';
                this.selected2.style.display = 'none';
                this.selected3.style.display = 'none';
                break;
            case 2:
                this.selected2.style.display = 'inline';
                this.selected3.style.display = 'none';
                this.selected1.style.display = 'none';
                break;
            case 3:
                this.selected3.style.display = 'inline';
                this.selected2.style.display = 'none';
                this.selected1.style.display = 'none';
                break;
        
            default:
                break;
        }
       
    }

    decrement(){
        if(this.counter < 2){
        } else {
            this.counter--;
        }
     switch (this.counter) {
            case 1:
                this.selected1.style.display = 'inline';
                this.selected2.style.display = 'none';
                this.selected3.style.display = 'none';
                break;
            case 2:
                this.selected2.style.display = 'inline';
                this.selected3.style.display = 'none';
                this.selected1.style.display = 'none';
                break;
            case 3:
                this.selected3.style.display = 'inline';
                this.selected2.style.display = 'none';
                this.selected1.style.display = 'none';
                break;
        
            default:
                break;
        }
    }

    


    initialDrawCard(cards: number) {
        for (let i = 0; i<cards; i++) {
            this.player.drawCard(this.deck.getDeck());
        }
    }

    tossedCard(i: number) {
        this.player.tossCard(i);
    }  

    //cardOne: Card, cardTwo: Card, cardThree: Card

    cardUpdate(){
        //let contentOne = this.player.getCardInHand(0).getSuit();
        //console.log(contentOne);
      
        
        
        

        // this.cardOneContent.innerHTML = cardOne;
        // this.cardTwoContent.innerHTML = cardTwo;
        // this.cardThreeContent.innerHTML = cardThree;
	}
}
