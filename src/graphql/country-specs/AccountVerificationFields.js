const { objectType } = require("nexus");

const AccountVerificationFields = objectType({
  name: "AccountVerificationFields",
  definition(t) {
    t.field("individual", { type: "VerificationFields" });
    t.field("company", { type: "VerificationFields" });
  }
});

module.exports = { AccountVerificationFields };
