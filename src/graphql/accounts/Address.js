const { objectType } = require("nexus");

const Address = objectType({
  name: "Address",
  definition(t) {
    t.string("city", { nullable: true });
    t.string("country", { nullable: true });
    t.string("line1", { nullable: true });
    t.string("line2", { nullable: true });
    t.string("postal_code", { nullable: true });
    t.string("state", { nullable: true });
  }
});

module.exports = { Address };
