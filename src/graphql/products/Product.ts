import { objectType } from "nexus";
import { resolve } from "path";

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.id("id");
    t.string("type");
    t.string("name");

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
