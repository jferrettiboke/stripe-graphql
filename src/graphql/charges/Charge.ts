import { objectType } from "@nexus/schema";
import NodeInterface from "../NodeInterface";
import AmountInterface from "../AmountInterface";
import CurrencyInterface from "../CurrencyInterface";

export const Charge = objectType({
  name: "Charge",
  definition(t) {
    t.implements(NodeInterface, AmountInterface, CurrencyInterface);
  },
});
