const { enumType } = require("nexus");

const CARD_FUNDING_TYPE = enumType({
  name: "CARD_FUNDING_TYPE",
  members: ["credit", "debit", "prepaid", "unknown"]
});

module.exports = { CARD_FUNDING_TYPE };
