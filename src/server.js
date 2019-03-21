const { GraphQLServer } = require("graphql-yoga");
const { Stripe } = require("stripe");
const schema = require("./schema");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const server = new GraphQLServer({
  schema,
  context: { stripe }
});

server.start({ port: 4001 }, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}`)
);
