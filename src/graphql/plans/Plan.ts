import { objectType } from "nexus";
import { formatCurrency } from "../../utils/currencies";

export const Plan = objectType({
  name: "Plan",
  definition(t) {
    t.implements("Node");
    t.int("amount", { nullable: true, resolve: o => o.amount });
    t.string("currency", o => o.currency);
    t.string("formattedAmount", {
      nullable: true,
      resolve: o => {
        if (o.amount === null) {
          return null;
        }
        return formatCurrency({ amount: o.amount, currency: o.currency });
      }
    });
  }
});
