import { objectType } from "@nexus/schema";
import NodeInterface from "../NodeInterface";
import AmountInterface from "../AmountInterface";
import CurrencyInterface from "../CurrencyInterface";
import { MetadataInterface } from "../MetadataInterface";

export const Charge = objectType({
  name: "Charge",
  definition(t) {
    t.implements(NodeInterface, AmountInterface, CurrencyInterface, MetadataInterface);
    t.string("status");
    t.string("payment_intent");
    t.int("created");
    t.string("description", { nullable: true });
    t.string("failure_code", { nullable: true });
    t.string("failure_message", { nullable: true });
    t.string("receipt_url", { nullable: true });
    t.string("receipt_number", { nullable: true });
  },
});
