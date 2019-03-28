import { stripeObjectType } from "stripe-graphql";

export const Customer = stripeObjectType({
  name: "Customer",
  fields: ["id", "email", "cards"],
  definition(t) {}
});
