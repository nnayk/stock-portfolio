const Portfolio = require("./portfolio.js");

test("Testing new empty portfolio", () => {
  const equities = new Portfolio();
  console.log(
    `shares = ${equities.getShares()}, len = ${equities.getShares().length}`
  );
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
  console.log(`shares = ${equities.getShares()}`);
  expect(equities.getNumberOfUniqueStocks()).toEqual(3);
});
