import { graphql } from "graphql";
import schema from "./schema";
import stripe from "./stripe";
import { createClient } from "../generated";

const client = createClient({
  fetcher: (operation) => {
    console.log("operation", operation);
    return graphql(
      schema,
      operation.query,
      null,
      { stripe },
      operation.variables
    ).then((response) => response);
  },
});

export default client;
