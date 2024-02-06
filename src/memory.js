class MemoryGame {
  constructor(cards) {
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) return undefined;
    let shuffledDeck = [];
    let randNums = [];
    let currRandNum;
    this.cards.forEach((element) => {
      currRandNum = this.getRandomInt(this.cards.length);
      while (randNums.includes(currRandNum)) {
        currRandNum = this.getRandomInt(this.cards.length);
      }
      randNums.push(currRandNum);
      shuffledDeck.push(this.cards[currRandNum]);
    });
    this.cards = [...shuffledDeck];
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  checkIfPair(card1, card2) {
    let result = false;
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      result = true;
    }
    return result;
  }

  checkIfFinished() {
    let isFinished = false;
    if (this.pairsGuessed === this.cards.length / 2) {
      isFinished = true;
    }
    return isFinished;
  }
}

// lab done