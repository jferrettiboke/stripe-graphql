import { stripeObjectType } from "stripe-graphql";

// Use stripeObjectType for "customers"
export const Query = stripeObjectType({
  name: "Query",
  fields: ["*"],
  definition(t) {}
});
