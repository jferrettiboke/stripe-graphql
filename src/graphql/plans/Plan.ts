import { objectType } from "nexus";
import { formatCurrency } from "../../utils/currencies";

export const Plan = objectType({
  name: "Plan",
  definition(t) {
    t.implements("Node");
    t.int("amount");
    t.string("currency");
    t.string("formattedAmount", o =>
      formatCurrency({ amount: o.amount, currency: o.currency })
    );
  }
});
