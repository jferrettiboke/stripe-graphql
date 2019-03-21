const { objectType } = require("nexus");

const VerificationFields = objectType({
  name: "VerificationFields",
  definition(t) {
    t.string("minimum", {
      list: [false],
      nullable: true
    });
    t.string("additional", {
      list: [false],
      nullable: true
    });
  }
});

module.exports = { VerificationFields };
