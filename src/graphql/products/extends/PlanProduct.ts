import { extendType } from "nexus";

export const planProductField = extendType({
  type: "Plan",
  definition(t) {
    t.field("product", {
      type: "Product",
      description: "The product whose pricing this plan determines.",
      async resolve(plan, args, context) {
        // @ts-ignore
        return await context.stripe.products.retrieve(plan.product);
      }
    });
  }
});
