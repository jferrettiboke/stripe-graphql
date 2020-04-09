const { GraphQLServer } = require("graphql-yoga");
const { Stripe } = require("stripe");
const { resolvers } = require("./resolvers");

const server = new GraphQLServer({
  typeDefs: "schema.graphql",
  resolvers,
  context: {
    stripe: new Stripe(process.env.STRIPE_SECRET_KEY)
  }
});

server.start({ port: 4001 }, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}`)
);
