
 class GameBoard {
    private deck: Deck;
    private player: Player;
    private counter: number;
    private selected1: HTMLInputElement;
    private selected2: HTMLInputElement;
    private selected3: HTMLInputElement;
    private cardOne: HTMLInputElement;
    private cardTwo: HTMLInputElement;
    private cardThree: HTMLInputElement;
    private tossPile: HTMLInputElement;
    private gameOn: boolean;
    private startBtn: HTMLInputElement;
  

    constructor() {
        
        this.deck = new Deck;
        this.player = new Player;
        this.counter = 2;
        this.gameOn = false;
        this.selected1 = document.getElementById('selected1') as HTMLInputElement;
        this.selected2 = document.getElementById('selected2') as HTMLInputElement;
        this.selected3 = document.getElementById('selected3') as HTMLInputElement;

        this.cardOne = document.getElementById('card1') as HTMLInputElement;
        this.cardTwo = document.getElementById('card2') as HTMLInputElement;
        this.cardThree = document.getElementById('card3') as HTMLInputElement;
        this.tossPile = document.getElementById('tossedCard') as HTMLInputElement;
        this.startBtn = document.getElementById('restart') as HTMLInputElement;
    }
    

    restart() {
        
        this.gameOn = true;
        this.counter = 2;
        this.cardOne.style.display = 'inline';
        this.cardTwo.style.display = 'inline';
        this.cardThree.style.display = 'inline';
        this.tossPile.style.display = 'none';
        this.selected1.style.display = 'none';
        this.selected2.style.display = 'inline';
        this.selected3.style.display = 'none';

        this.deck.showDeck();
        this.deck.clearDeck();
        this.player.clearCardsInHand();
        this.deck.fillDeck();
        for (let i = 0; i < 3; i++) {
		    this.player.drawCard(this.deck.getDeck());
		}
     

        this.cardOne.innerHTML = this.player.getCardInHand(0).join(' ');
        this.cardTwo.innerHTML = this.player.getCardInHand(1).join(' ');
        this.cardThree.innerHTML = this.player.getCardInHand(2).join(' ');
        this.tossPile.innerHTML = '';
        this.startBtn.innerHTML = 'Restart';
    }

    increment(){
        if (this.gameOn){
        if (this.counter > 2){
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
    }

    decrement(){
        if (this.gameOn){
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
    }

    
    tossedCard() {
    if (this.gameOn){

    this.tossPile.style.display = 'inline';
    this.tossPile.innerHTML = this.player.getCardInHand(this.counter-1).join(' '); //Problem!
    this.player.tossCard(this.counter-1);
    
    
    if (this.deck.getDeck().length > 0) {
        this.player.drawCard(this.deck.getDeck());
    } 
    this.cardUpdate();
    }  
    }


    cardUpdate(){
            console.log(this.player.getCardsInHand());
            
            if (this.player.getCardsInHand().length == 3) {
               this.cardThree.innerHTML = this.player.getCardInHand(2).join(' '); 
                this.cardOne.innerHTML = this.player.getCardInHand(0).join(' ');
                this.cardTwo.innerHTML = this.player.getCardInHand(1).join(' ');
            } 
            if (this.player.getCardsInHand().length == 2) {
                this.cardOne.innerHTML = this.player.getCardInHand(0).join(' ');
                this.cardTwo.innerHTML = this.player.getCardInHand(1).join(' ');
                this.cardThree.style.display = 'none';
            } 
            if (this.player.getCardsInHand().length == 1) {
                this.cardTwo.style.display = 'none';
                this.cardOne.innerHTML = this.player.getCardInHand(0).join(' ');
            } 
            if (this.player.getCardsInHand().length == 0) {
                this.cardOne.style.display = 'none';
            }
            
            
       
        
       
	}
}
