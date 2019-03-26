import { objectType } from "nexus";

export const Plan = objectType({
  name: "Plan",
  definition(t) {
    t.id("id");
    t.int("amount");
    t.string("currency");

    t.field("product", {
      type: "Product",
      async resolve(plan, args, context) {
        // @ts-ignore
        return await context.stripe.products.retrieve(plan.product);
      }
    });
  }
});
