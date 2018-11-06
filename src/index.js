const path = require("path");
const { makeExecutableSchema } = require("graphql-tools");
const { importSchema } = require("graphql-import");
const { Binding } = require("graphql-binding");

const typeDefs = importSchema(path.resolve(__dirname, "schema.graphql"));
const { resolvers } = require("./resolvers");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

class StripeServiceBinding extends Binding {
  constructor() {
    super({ schema });
  }
}

module.exports = { schema, StripeServiceBinding };
