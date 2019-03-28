import { stripeObjectType } from "stripe-graphql";

export const Card = stripeObjectType({
  name: "Card",
  fields: [
    "id",
    "brand",
    "last4",
    { name: "exp_month", alias: "expMonth" },
    { name: "exp_year", alias: "expYear" }
  ],
  definition(t) {}
});
