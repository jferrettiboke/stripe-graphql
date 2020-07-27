import { ApolloServer } from "apollo-server";
import schema from "./schema";
import stripe from "./stripe";
import client from "./client";
const server = new ApolloServer({ schema, context: { stripe } });

const port = process.env.PORT || 4000;

server.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
