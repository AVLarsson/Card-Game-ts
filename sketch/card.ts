
 class Card {

    private suit: number;
    private rank: number;
    private isFaceUp: Boolean;

    constructor(suit: number, rank: number) {
        this.suit = suit;
        this.rank = rank;
        this.isFaceUp = false;
    }

    makeFaceUp (isFaceUp: Boolean) {
        this.isFaceUp = isFaceUp;
    }
    
    getSuit(){
        return(this.suit)
    }

    getRank(){
        return(this.rank)
    }
}