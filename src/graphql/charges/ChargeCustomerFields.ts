import { extendType } from "nexus";

export const ChargeCustomerFields = extendType({
  type: "Customer",
  definition(t) {
    t.list.field("charges", {
      type: "Charge",
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.charges.list({ customer: id });
        return data;
      }
    });
  }
});
