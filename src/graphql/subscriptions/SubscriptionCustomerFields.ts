import { extendType } from "nexus";

export const SubscriptionCustomerFields = extendType({
  type: "Customer",
  definition(t) {
    t.list.field("subscriptions", {
      type: "_Subscription",
      async resolve({ id }, args, context, info) {
        const { data } = await context.stripe.subscriptions.list({
          customer: id
        });
        return data;
      }
    });
  }
});
