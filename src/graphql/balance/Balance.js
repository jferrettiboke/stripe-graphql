const { objectType } = require("nexus");

const Balance = objectType({
  name: "Balance",
  definition(t) {
    t.string("object");
    t.boolean("livemode");
    t.list.field("available", { type: "BalanceItem" });
    t.list.field("pending", { type: "BalanceItem" });
  }
});

module.exports = { Balance };
