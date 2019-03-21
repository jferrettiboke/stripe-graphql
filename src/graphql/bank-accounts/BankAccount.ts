import { objectType } from "nexus";

export const BankAccount = objectType({
  name: "BankAccount",
  definition(t) {
    t.id("id");
    t.string("account_holder_name", { nullable: true });
    t.field("account_holder_type", {
      type: "LEGAL_ENTITY_TYPE",
      nullable: true
    });
    t.string("bank_name", { nullable: true });
    t.string("country", { nullable: true });
    t.string("currency", { nullable: true });
    t.string("customer", { nullable: true });
    t.string("fingerprint", { nullable: true });
    t.string("last4", { nullable: true });
    t.string("routing_number", { nullable: true });
    t.string("status", { nullable: true });
  }
});
