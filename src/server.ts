import { ApolloServer } from "apollo-server";
import Stripe from "stripe";
import schema from "./schema";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2020-03-02",
});

const server = new ApolloServer({
  schema,
  context: {
    stripe,
  },
});

const port = process.env.PORT || 4000;

server.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
