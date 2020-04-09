import { extendType } from "@nexus/schema";
import { Plan } from "../Plan";

export const productPlansField = extendType({
  type: "Service",
  definition(t) {
    t.list.field("plans", {
      type: Plan,
      async resolve(product, args, context, info) {
        const { data } = await context.stripe.plans.list({
          product: product.id,
        });
        return data;
      },
    });
  },
});
