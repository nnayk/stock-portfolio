const Portfolio = require("./portfolio.js");

test("Testing new empty portfolio", () => {
  const equities = new Portfolio();
  expect(equities.getShares()).toEqual([]);
});

test("Testing portfolio empty functionality", () => {
  const equities = new Portfolio();
  expect(equities.isEmpty()).toEqual(true);
});

test("Testing number of unique shares in portfolio", () => {
  const equities = new Portfolio();
  equities.addShares("AAPL", 5);
  equities.addShares("GE", 7);
  equities.addShares("BRK", 1);
  expect(equities.getNumberOfUniqueStocks()).toEqual(3);
});

test("Testing adding multiple shares to a portfolio at once", () => {
  const equities = new Portfolio();
  equities.addShares("AAPL", 5);
  equities.addShares("GE", 7);
  equities.addShares("BRK", 1);
  expect(equities.countOccurrences("AAPL")).toEqual(5);
});

test("Testing removing multiple shares from a portfolio", () => {
  const equities = new Portfolio();
  equities.addShares("AAPL", 5);
  equities.addShares("GE", 7);
  equities.addShares("BRK", 1);
  equities.removeShares("AAPL", 3);
  console.log(`after removal: ${equities.getShares()}`);
  expect(equities.countOccurrences("AAPL")).toEqual(2);
});
