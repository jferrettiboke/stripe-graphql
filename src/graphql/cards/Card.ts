import { objectType } from "@nexus/schema";
import NodeInterface from "../NodeInterface";
import { MetadataInterface } from "../MetadataInterface";
import { CARD_FUNDING_TYPE } from "./CARD_FUNDING_TYPE";

export const Card = objectType({
  name: "Card",
  definition(t) {
    t.implements(NodeInterface, MetadataInterface);
    t.string("brand", { nullable: true });
    t.string("country", { nullable: true });
    t.boolean("default_for_currency", { nullable: true });
    t.int("exp_month", { nullable: true });
    t.int("exp_year", { nullable: true });
    t.field("funding", { type: CARD_FUNDING_TYPE });
    t.string("last4", { nullable: true });
    t.string("name", { nullable: true });
  },
});
