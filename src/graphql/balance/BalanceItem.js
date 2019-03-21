const { objectType } = require("nexus");

const BalanceItem = objectType({
  name: "BalanceItem",
  definition(t) {
    t.string("currency");
    t.int("amount");
  }
});

module.exports = { BalanceItem };
