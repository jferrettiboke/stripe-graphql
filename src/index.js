const { makeExecutableSchema } = require("graphql-tools");
const { importSchema } = require("graphql-import");

const typeDefs = importSchema("./src/schema.graphql");
const resolvers = require("./resolvers");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = { schema };
