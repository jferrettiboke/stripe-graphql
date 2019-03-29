import { objectType } from "nexus";

export const BalanceTransaction = objectType({
  name: "BalanceTransaction",
  definition(t) {
    t.implements("Node");
    t.int("amount", { nullable: true });
    t.int("available_on", { nullable: true });
    t.int("created", { nullable: true });
    t.string("currency", { nullable: true });
    t.string("description", { nullable: true });
    t.float("exchange_rate", { nullable: true });
    t.int("fee", { nullable: true });
    t.list.field("fee_details", { type: "FeeDetails" });
    t.int("net", { nullable: true });
    t.string("source", { nullable: true });
    t.string("status", { nullable: true });
    t.string("type", { nullable: true });
  }
});
