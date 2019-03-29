import { extendType } from "nexus";

export const CustomerSubscriptionFields = extendType({
  type: "_Subscription",
  definition(t) {
    t.field("customer", {
      type: "Customer",
      async resolve({ customer }, args, context, info) {
        const customerId =
          typeof customer === "string" ? customer : customer.id;
        return await context.stripe.customers.retrieve(customerId);
      }
    });
  }
});
