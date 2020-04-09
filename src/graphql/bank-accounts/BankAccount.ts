import { objectType, enumType } from "@nexus/schema";
import NodeInterface from "../NodeInterface";
import CurrencyInterface from "../CurrencyInterface";
import { MetadataInterface } from "../MetadataInterface";

export const LEGAL_ENTITY_TYPE = enumType({
  name: "LEGAL_ENTITY_TYPE",
  members: ["individual", "company"],
});

export const BankAccount = objectType({
  name: "BankAccount",
  definition(t) {
    t.implements(NodeInterface, CurrencyInterface, MetadataInterface);
    t.string("account_holder_name", { nullable: true });
    t.field("account_holder_type", {
      type: LEGAL_ENTITY_TYPE,
      nullable: true,
    });
    t.string("bank_name", { nullable: true });
    t.string("country", { nullable: true });
    t.string("customer", { nullable: true });
    t.string("fingerprint", { nullable: true });
    t.string("last4", { nullable: true });
    t.string("routing_number", { nullable: true });
    t.string("status", { nullable: true });
  },
});
