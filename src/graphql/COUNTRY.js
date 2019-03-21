const { enumType } = require("nexus");

const COUNTRY = enumType({
  name: "COUNTRY",
  members: ["US"]
});

module.exports = { COUNTRY };
