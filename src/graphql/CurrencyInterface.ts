import { interfaceType, objectType } from "@nexus/schema";
import { formatCurrency, intToFloat, getCurrency } from "../utils/currencies";

const Currency = objectType({
  name: "Currency",
  definition(t) {
    t.string("code", (o) => o.currency.toUpperCase());
    t.string("symbol", (o) =>
      getCurrency({ amount: o.amount, currency: o.currency })
    );
  },
});
export const CurrencyInterface = interfaceType({
  name: "CurrencyInterface",
  definition(t) {
    t.field("currency", {
      type: Currency,
      resolve: (o) => o,
    });
    t.resolveType(() => null);
  },
});

export default CurrencyInterface;
