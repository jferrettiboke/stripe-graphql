const { delegateToSchema } = require("graphql-tools");
const { GraphQLServer } = require("graphql-yoga");
const { Stripe } = require("stripe");
const { importSchema } = require("graphql-import");

// ????????
const { schema } = require("../src");

const typeDefs = importSchema("./src/example/schema.graphql");
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    usCountrySpec: (root, args, context, info) => {
      return delegateToSchema({
        schema,
        operation: "query",
        fieldName: "countrySpecs",
        args: { country: "US" },
        context,
        info
      });
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  // typeDefs: "./src/schema2.graphql",
  resolvers,
  context: {
    stripe: new Stripe(process.env.STRIPE_SECRET_KEY)
  }
});

server.start(({ port }) =>
  console.log(`Server is running on http://localhost:${port}`)
);
