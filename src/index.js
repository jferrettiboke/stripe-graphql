const requireGraphQLFile = require("require-graphql-file");
const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");
const typeDefs = requireGraphQLFile("./schema");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = { schema };
