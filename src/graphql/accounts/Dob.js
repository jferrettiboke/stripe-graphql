const { objectType } = require("nexus");

const Dob = objectType({
  name: "Dob",
  definition(t) {
    t.int("day", { nullable: true });
    t.int("month", { nullable: true });
    t.int("year", { nullable: true });
  }
});

module.exports = { Dob };
