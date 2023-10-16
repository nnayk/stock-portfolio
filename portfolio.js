class Portfolio {
  constructor() {
    this.shares = [];
  }

  // Add a share to the portfolio
  addShares(share, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.shares.push(share);
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
}

module.exports = Portfolio;
