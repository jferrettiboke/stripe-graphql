const { objectType } = require("nexus");

const FeeDetails = objectType({
  name: "FeeDetails",
  definition(t) {
    t.string("id", { nullable: true });
    t.int("amount", { nullable: true });
    t.string("application", { nullable: true });
    t.string("currency", { nullable: true });
    t.string("description", { nullable: true });
    t.string("type", { nullable: true });
  }
});

module.exports = { FeeDetails };
