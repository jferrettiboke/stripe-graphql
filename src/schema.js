const path = require("path");
const { makeSchema } = require("nexus");
const types = require("./graphql");

const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, "./my-schema.graphql"),
    typegen: path.join(__dirname, "./my-generated-types.d.ts")
  }
});

module.exports = { schema };
