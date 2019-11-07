import { extendType } from "nexus";

export const CustomerSubscriptions = extendType({
  type: "Customer",
  definition(t) {
    t.list.field("subscriptions", {
      type: "StripeSubscription",
      async resolve({ id }, args, context, info) {
        const { data } = await context.stripe.subscriptions.list({
          customer: id
        });
        return data;
      }
    });
  }
});
