import { objectType } from "@nexus/schema";
import NodeInterface from "../NodeInterface";
import AmountInterface from "../AmountInterface";
import CurrencyInterface from "../CurrencyInterface";
import { MetadataInterface } from "../MetadataInterface";
import { Tier } from "./Tier";
import { TransformUsage } from "./TransformUsage";

export const Plan = objectType({
  name: "Plan",
  definition(t) {
    t.implements(
      NodeInterface,
      AmountInterface,
      CurrencyInterface,
      MetadataInterface
    );
    t.boolean("active");
    t.string("aggregate_usage", { nullable: true });
    t.string("amount_decimal", { nullable: true });
    t.string("billing_scheme");
    t.int("created");
    t.string("interval");
    t.int("interval_count");
    t.boolean("livemode");
    t.string("nickname", { nullable: true });
    t.list.field("tiers", { type: Tier, nullable: true });
    t.string("tiers_mode", { nullable: true });
    t.field("transform_usage", { type: TransformUsage, nullable: true });
    t.int("trial_period_days", { nullable: true });
    t.string("usage_type");
  },
});
