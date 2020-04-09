import { interfaceType, objectType } from "@nexus/schema";
import { formatCurrency, intToFloat } from "../utils/currencies";

const Amount = objectType({
  name: "Amount",
  definition(t) {
    t.int("raw", (o) => o.amount);
    t.float("raw_formatted", (o) =>
      intToFloat({ amount: o.amount, currency: o.currency })
    );
    t.string("formatted", (o) =>
      formatCurrency({ amount: o.amount, currency: o.currency })
    );
  },
});

export const AmountInterface = interfaceType({
  name: "AmountInterface",
  definition(t) {
    t.field("amount", {
      type: Amount,
      resolve: (o) => o,
    });
    t.resolveType(() => null);
  },
});

export default AmountInterface;
