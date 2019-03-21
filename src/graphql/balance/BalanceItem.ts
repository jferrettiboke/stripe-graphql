import { objectType } from "nexus";

export const BalanceItem = objectType({
  name: "BalanceItem",
  definition(t) {
    t.string("currency");
    t.int("amount");
  }
});
