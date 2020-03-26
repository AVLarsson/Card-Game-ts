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
    }
    Deck.prototype.clearDeck = function () {
        this.cards = [];
    };
    Deck.prototype.fillDeck = function () {
        console.log('btn reached');
        var j = 0;
        while (j < 4) {
            for (var i = 1; i < 14; i++) {
                this.cards.push(new Card(j, i));
            }
            j++;
        }
        this.shuffle(this.cards);
        console.log("Number of cards in deck: " + this.cards.length);
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
    Deck.prototype.getDeck = function () {
        return this.cards;
    };
    return Deck;
}());
var GameBoard = (function () {
    function GameBoard() {
        this.deck = new Deck;
        this.player = new Player;
        this.cardOneContent = document.getElementById('card1');
        this.cardOneContent = document.getElementById('card1');
    }
    GameBoard.prototype.restart = function () {
        var cardOne = document.getElementById('card1');
        this.deck.clearDeck();
        this.deck.fillDeck();
        for (var i = 0; i < 3; i++) {
            this.player.drawCard(this.deck.getDeck());
        }
        console.log(this.deck.getDeck());
    };
    GameBoard.prototype.initialDrawCard = function (cards) {
        for (var i = 0; i < cards; i++) {
            this.player.drawCard(this.deck.getDeck());
        }
    };
    GameBoard.prototype.tossedCard = function (i) {
        this.player.tossCard(i);
    };
    GameBoard.prototype.cardUpdate = function (cardOne) {
        var contentOne = cardOne.getSuit();
    };
    return GameBoard;
}());
var Player = (function () {
    function Player() {
        this.cardsInHand = [];
    }
    Player.prototype.drawCard = function (array) {
        this.cardsInHand.push(array.pop());
        this.cardsInHand[this.cardsInHand.length - 1].makeFaceUp(true);
        return (this.cardsInHand);
    };
    Player.prototype.tossCard = function (i) {
        this.cardsInHand.splice(i, 1);
    };
    return Player;
}());
var Index = (function () {
    function Index() {
        var _this = this;
        this.deck = new Deck();
        this.player = new Player();
        this.gameBoard = new GameBoard();
        this.newGame();
        var restartBtn = document.getElementById('restart');
        restartBtn.addEventListener('click', function (e) { return _this.gameBoard.restart(); });
    }
    Index.prototype.newGame = function () {
        this.deck.fillDeck();
        console.log(this.deck);
        console.log('Annies kortspel');
        console.log('Player drew:');
        for (var i = 0; i < 5; i++) {
            this.player.drawCard(this.deck.getDeck());
        }
        console.log(this.player.cardsInHand);
        this.player.tossCard(1);
        console.log('player toss away index 1');
        console.log(this.player.cardsInHand);
        console.log(this.deck.getDeck().length);
    };
    return Index;
}());
var newGame;
window.addEventListener('load', function () { newGame = new Index; });
//# sourceMappingURL=bundle.js.map