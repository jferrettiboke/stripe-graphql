const { objectType } = require("nexus");

const Query = objectType({
  name: "Query",
  definition(t) {}
});

module.exports = { Query };
