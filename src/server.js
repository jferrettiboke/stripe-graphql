const { GraphQLServer } = require("graphql-yoga");
const { Stripe } = require("stripe");
const { resolvers } = require("./resolvers");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    stripe
  }
});

server.start({ port: 4001 }, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}`)
);
