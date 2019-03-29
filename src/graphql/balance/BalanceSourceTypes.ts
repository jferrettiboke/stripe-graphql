import { objectType } from "nexus";

export const BalanceSourceTypes = objectType({
  name: "BalanceSourceTypes",
  definition(t) {
    t.int("bank_account", {
      description: "Amount for bank account.",
      nullable: true
    });
    t.int("card", {
      description: "Amount for card.",
      nullable: true
    });
  }
});
