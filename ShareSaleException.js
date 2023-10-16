class ShareSaleException extends Error {
  constructor(message) {
    super(message);
    this.name = "ShareSaleException"; // Set the name property for the exception.
  }
}

module.exports = ShareSaleException;
