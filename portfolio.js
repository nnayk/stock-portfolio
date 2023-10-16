class Portfolio {
  constructor() {
    this.shares = [];
  }

  // Method to add a share to the portfolio
  addShare(share) {
    this.shares.push(share);
  }

  getShares() {
    return this.shares;
  }

  isEmpty() {
    return this.shares.length == 0;
  }
}

module.exports = Portfolio;
