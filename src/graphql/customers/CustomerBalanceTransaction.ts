import { objectType } from "nexus";

export const CustomerBalanceTransaction = objectType({
  name: "CustomerBalanceTransaction",
  definition(t) {
    t.id("id");
    t.string("object");
    t.int("amount");
    t.string("currency");
  }
});
