import { objectType } from "@nexus/schema";
import AmountInterface from "../AmountInterface";
import CurrencyInterface from "../CurrencyInterface";

const BalanceFundSourceTypes = objectType({
  name: "BalanceFundSourceTypes",
  definition(t) {
    t.int("bank_account", { nullable: true });
    t.int("card", { nullable: true });
    t.int("fpx", { nullable: true });
  },
});

const BalanceFund = objectType({
  name: "BalanceFund",
  definition(t) {
    t.implements(AmountInterface, CurrencyInterface);
    t.field("source_types", { type: BalanceFundSourceTypes });
  },
});

export const Balance = objectType({
  name: "Balance",
  definition(t) {
    t.list.field("available", { type: BalanceFund });
    t.list.field("pending", { type: BalanceFund });
  },
});
