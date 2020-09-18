import { extendType } from "@nexus/schema";

export const customerChargesField = extendType({
  type: "Charge",
  definition(t) {
    t.field("customer", {
      type: 'Customer',
      async resolve({ customer }, args, context, info) {
        const customerId =
          typeof customer === "string" ? customer : customer.id;
        return await context.stripe.customers.retrieve(customerId);
      }
    });
  },
});
