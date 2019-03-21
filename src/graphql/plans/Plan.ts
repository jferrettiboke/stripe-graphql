import { objectType } from "nexus";

export const Plan = objectType({
  name: "Plan",
  definition(t) {
    t.id("id");
    t.int("amount");
    t.string("currency");

    t.string("product");
    t.field("productConnection", {
      type: "Product",
      async resolve(plan, args, context) {
        return await context.stripe.products.retrieve(plan.product);
      }
    });
  }
});
