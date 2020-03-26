


class Deck {

    private cards: Array<Card>;

    constructor() {

        this.cards = [];
        
    }

    clearDeck() {
        this.cards = [];
    }

    fillDeck() {
        console.log('btn reached');
        
        let j = 0;
        while (j < 4) {
            for (let i = 1; i<14; i++) {
                this.cards.push(new Card(j, i));
            }
            j++;
        }
        this.shuffle(this.cards);
        console.log("Number of cards in deck: " + this.cards.length)
    }

    /** Durstenfeld shuffle */
    shuffle(array: Array<Card>) {
        let currentIndex = array.length, temporaryValue: Card, randomIndex: number;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    getDeck() {
        return this.cards;
    }
}
