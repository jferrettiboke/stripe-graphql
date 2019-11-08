import { objectType } from "nexus";
import { formatCurrency } from "../../utils/currencies";

export const Plan = objectType({
  name: "Plan",
  definition(t) {
    t.implements("Node", "Metadata");
    t.boolean("active", {
      description:
        "Whether the plan is currently available for new subscriptions."
    });
    t.string("aggregate_usage", {
      nullable: true,
      description:
        "Specifies a usage aggregation strategy for plans of usage_`type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for picking the last usage record reported within a period, `last_ever` for picking the last usage record ever (across period bounds) or `max` which picks the usage record with the maximum reported usage during a period. Defaults to `sum`."
    });
    t.int("amount", {
      nullable: true,
      description:
        "The amount in cents to be charged on the interval specified."
    });
    t.string("amount_decimal", {
      nullable: true,
      description:
        "Same as amount, but contains a decimal value with at most 12 decimal places."
    });
    t.string("formattedAmount", {
      nullable: true,
      resolve: o => {
        if (o.amount === null) {
          return null;
        }
        return formatCurrency({ amount: o.amount, currency: o.currency });
      }
    });
    t.string("billing_scheme", {
      description:
        "Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes."
    });
    t.int("created", {
      description:
        "Time at which the object was created. Measured in seconds since the Unix epoch."
    });
    t.string("currency", {
      description:
        "Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies)."
    });
    t.string("interval", {
      description:
        "One of `day`, `week`, `month` or `year`. The frequency with which a subscription should be billed."
    });
    t.int("interval_count", {
      description:
        "The number of intervals (specified in the `interval` property) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months."
    });
    t.boolean("livemode", {
      description:
        "Has the value true if the object exists in live mode or the value false if the object exists in test mode."
    });
    t.string("nickname", {
      nullable: true,
      description: "A brief description of the plan, hidden from customers."
    });
    t.list.field("tiers", {
      type: "Tier",
      nullable: true,
      description:
        "Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`."
    });
    t.string("tiers_mode", {
      nullable: true,
      description:
        "Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows."
    });
    t.field("transform_usage", {
      type: "TransformUsage",
      nullable: true,
      description:
        "Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`."
    });
    t.int("trial_period_days", {
      nullable: true,
      description:
        "Default number of trial days when subscribing a customer to this plan using `trial_from_plan=true`."
    });
    t.string("usage_type", {
      description:
        "Configures how the quantity per period should be determined, can be either `metered` or `licensed`. `licensed` will automatically bill the `quantity` set for a plan when adding it to a subscription, `metered` will aggregate the total usage based on usage records. Defaults to `licensed`."
    });
  }
});
