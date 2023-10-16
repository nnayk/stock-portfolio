class Portfolio {
  constructor() {
    this.shares = [];
  }

  // Add shares to the portfolio
  addShares(share, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.shares.push(share);
    }
  }

  // Remove shares from the portfolio
  removeShares(share, quantity) {
    for (let i = 0; i < quantity; i++) {
      const index = this.shares.indexOf(share);
      if (index > -1) {
        // only splice array when item is found
        this.shares.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
  }

  // Get all the shares in a portfolio
  getShares() {
    return this.shares;
  }

  // Determine whether a portfolio is empty
  isEmpty() {
    return this.shares.length == 0;
  }

  // Get the number of unique stocks in the portfolio
  getNumberOfUniqueStocks() {
    const set_shares = new Set(this.shares);
    return set_shares.size;
  }

  // Get the number of shares of a particular stock in the portfolio
  countOccurrences(targetValue) {
    let count = 0;
    for (const item of this.shares) {
      if (item === targetValue) {
        count++;
      }
    }
    return count;
  }
}

module.exports = Portfolio;
