import { extendType } from "nexus";

export const PlanProduct = extendType({
  type: "Plan",
  definition(t) {
    t.field("product", {
      type: "Product",
      async resolve(plan, args, context) {
        // @ts-ignore
        return await context.stripe.products.retrieve(plan.product);
      }
    });
  }
});
