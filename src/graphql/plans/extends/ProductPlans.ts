import { extendType } from "nexus";

export const productPlansField = extendType({
  type: "Service",
  definition(t) {
    t.list.field("plans", {
      type: "Plan",
      async resolve(product, args, context, info) {
        const { data } = await context.stripe.plans.list({
          product: product.id
        });
        return data;
      }
    });
  }
});
