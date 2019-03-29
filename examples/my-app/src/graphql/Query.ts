import { stripeObjectType } from "stripe-graphql";

export const Query = stripeObjectType({
  name: "Query",
  fields: ["*"],
  definition(t) {}
});
