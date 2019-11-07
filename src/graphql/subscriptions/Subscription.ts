import { objectType } from "nexus";

export const StripeSubscription = objectType({
  name: "StripeSubscription",
  definition(t) {
    t.implements("Node");
  }
});
