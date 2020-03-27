"use strict";
var Card = (function () {
    function Card(suit, rank) {
        this.suit = suit;
        this.rank = rank;
        this.isFaceUp = false;
    }
    Card.prototype.makeFaceUp = function (isFaceUp) {
        this.isFaceUp = isFaceUp;
    };
    Card.prototype.getSuit = function () {
        return (this.suit);
    };
    Card.prototype.getRank = function () {
        return (this.rank);
    };
    return Card;
}());
var Deck = (function () {
    function Deck() {
        this.cards = [];
        this.gameDeck = document.getElementById('deck');
    }
    Deck.prototype.clearDeck = function () {
        this.cards = [];
    };
    Deck.prototype.fillDeck = function () {
        var j = 0;
        while (j < 4) {
            for (var i = 1; i < 3; i++) {
                this.cards.push(new Card(j, i));
            }
            j++;
        }
        this.shuffle(this.cards);
    };
    Deck.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    Deck.prototype.showDeck = function () {
        this.gameDeck.style.display = 'inline';
    };
    Deck.prototype.getDeck = function () {
        return this.cards;
    };
    return Deck;
}());
var GameBoard = (function () {
    function GameBoard() {
        this.deck = new Deck;
        this.player = new Player;
        this.counter = 2;
        this.gameOn = false;
        this.selected1 = document.getElementById('selected1');
        this.selected2 = document.getElementById('selected2');
        this.selected3 = document.getElementById('selected3');
        this.cardOne = document.getElementById('card1');
        this.cardTwo = document.getElementById('card2');
        this.cardThree = document.getElementById('card3');
        this.tossPile = document.getElementById('tossedCard');
        this.startBtn = document.getElementById('restart');
    }
    GameBoard.prototype.restart = function () {
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
        for (var i = 0; i < 3; i++) {
            this.player.drawCard(this.deck.getDeck());
        }
        this.cardOne.innerHTML = this.player.getCardInHand(0).join(' ');
        this.cardTwo.innerHTML = this.player.getCardInHand(1).join(' ');
        this.cardThree.innerHTML = this.player.getCardInHand(2).join(' ');
        this.tossPile.innerHTML = '';
        this.startBtn.innerHTML = 'Restart';
    };
    GameBoard.prototype.increment = function () {
        if (this.gameOn) {
            if (this.counter > 2) {
            }
            else {
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
    };
    GameBoard.prototype.decrement = function () {
        if (this.gameOn) {
            if (this.counter < 2) {
            }
            else {
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
    };
    GameBoard.prototype.tossedCard = function () {
        if (this.gameOn) {
            this.tossPile.style.display = 'inline';
            this.tossPile.innerHTML = this.player.getCardInHand(this.counter - 1).join(' ');
            this.player.tossCard(this.counter - 1);
            if (this.deck.getDeck().length > 0) {
                this.player.drawCard(this.deck.getDeck());
            }
            this.cardUpdate();
        }
    };
    GameBoard.prototype.cardUpdate = function () {
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
    };
    return GameBoard;
}());
var Index = (function () {
    function Index() {
        var _this = this;
        this.deck = new Deck();
        this.player = new Player();
        this.gameBoard = new GameBoard();
        this.newGame();
        var restartBtn = document.getElementById('restart');
        restartBtn.addEventListener('click', function () { return _this.gameBoard.restart(); });
        var plusBtn = document.getElementById('increment');
        plusBtn.addEventListener('click', function () { return _this.gameBoard.increment(); });
        var minusBtn = document.getElementById('decrement');
        minusBtn.addEventListener('click', function () { return _this.gameBoard.decrement(); });
        var tossBtn = document.getElementById('toss');
        tossBtn.addEventListener('click', function () { return _this.gameBoard.tossedCard(); });
    }
    Index.prototype.newGame = function () {
        this.deck.fillDeck();
        for (var i = 0; i < 5; i++) {
            this.player.drawCard(this.deck.getDeck());
        }
        this.player.tossCard(1);
    };
    return Index;
}());
var newGame;
window.addEventListener('load', function () { newGame = new Index; });
var Player = (function () {
    function Player() {
        this.deck = new Deck();
        this.cardsInHand = [];
        this.rank = 0;
        this.suit = 0;
    }
    Player.prototype.drawCard = function (array) {
        this.cardsInHand.push(array.pop());
        this.cardsInHand[this.cardsInHand.length - 1].makeFaceUp(true);
        return (this.cardsInHand);
    };
    Player.prototype.clearCardsInHand = function () {
        this.cardsInHand = [];
    };
    Player.prototype.tossCard = function (i) {
        this.cardsInHand.splice(i, 1);
    };
    Player.prototype.getCardsInHand = function () {
        return this.cardsInHand;
    };
    Player.prototype.getCardInHand = function (i) {
        var cardInfo = [this.cardsInHand[i].getRank(), this.cardsInHand[i].getSuit()];
        var cardInfoStr = cardInfo.map(String);
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
        return (cardInfoStr);
    };
    return Player;
}());
//# sourceMappingURL=bundle.js.map