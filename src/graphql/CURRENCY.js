const { enumType } = require("nexus");

const CURRENCY = enumType({
  name: "CURRENCY",
  members: ["eur", "gbp", "usd"]
});

module.exports = { CURRENCY };
