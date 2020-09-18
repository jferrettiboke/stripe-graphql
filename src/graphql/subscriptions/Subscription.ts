import { objectType } from "@nexus/schema";
import NodeInterface from "../NodeInterface";
import { MetadataInterface } from "../MetadataInterface";
import { SubscriptionItemInterface } from "./SubscriptionItemInterface";

export const Subscription = objectType({
  name: "Subscription",
  definition(t) {
    t.implements(NodeInterface, MetadataInterface, SubscriptionItemInterface);
    t.string("status");
    t.int("created");
    t.int("billing_cycle_anchor");
    t.int("cancel_at", { nullable: true });
    t.int("canceled_at", { nullable: true });
    t.string("collection_method");
    t.int("current_period_start");
    t.int("current_period_end");
    t.int("latest_invoice", { nullable: true });
  },
});
