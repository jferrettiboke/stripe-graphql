import { objectType } from "nexus";
import { formatCurrency } from "../../utils/currencies";

export const Plan = objectType({
  name: "Plan",
  definition(t) {
    t.id("id");
    t.int("amount");
    t.string("currency");
    t.string("formattedAmount", o =>
      formatCurrency({ amount: o.amount, currency: o.currency })
    );

    t.field("product", {
      type: "Product",
      async resolve(plan, args, context) {
        // @ts-ignore
        return await context.stripe.products.retrieve(plan.product);
      }
    });
  }
});
