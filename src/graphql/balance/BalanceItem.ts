import { objectType } from "nexus";

export const BalanceItem = objectType({
  name: "BalanceItem",
  definition(t) {
    t.string("currency");
    t.int("amount");
    t.field("source_types", {
      type: "BalanceSourceTypes",
      description: "Breakdown of balance by source types."
    });
  }
});
