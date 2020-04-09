import { objectType } from "@nexus/schema";
import NodeInterface from "../NodeInterface";
import AmountInterface from "../AmountInterface";
import CurrencyInterface from "../CurrencyInterface";

export const BalanceTransaction = objectType({
  name: "BalanceTransaction",
  definition(t) {
    t.implements(NodeInterface, AmountInterface, CurrencyInterface);
  },
});
