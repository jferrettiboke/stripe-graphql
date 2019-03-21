const { enumType } = require("nexus");

const LEGAL_ENTITY_TYPE = enumType({
  name: "LEGAL_ENTITY_TYPE",
  members: ["individual", "company"]
});

module.exports = { LEGAL_ENTITY_TYPE };
