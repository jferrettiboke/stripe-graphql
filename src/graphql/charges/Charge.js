const { objectType } = require("nexus");

const Charge = objectType({
  name: "Charge",
  definition(t) {
    t.string("id");
    t.string("object");
    t.int("amount", { nullable: true });
    t.string("currency", { nullable: true });
    t.string("balance_transaction", { nullable: true });
  }
});

module.exports = { Charge };
