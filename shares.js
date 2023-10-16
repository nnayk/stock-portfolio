class Share {
  constructor(companyName, sharePrice, numberOfSharesOwned) {
    this.companyName = companyName;
    this.sharePrice = sharePrice;
    this.numberOfSharesOwned = numberOfSharesOwned;
  }

  // Method to calculate the total value of the shares
  calculateValue() {
    return this.sharePrice * this.numberOfSharesOwned;
  }
}

export default Share;
