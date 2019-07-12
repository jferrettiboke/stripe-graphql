import { objectType } from "nexus";

export const Card = objectType({
  name: "Card",
  definition(t) {
    t.implements("Node");
    t.string("brand", { nullable: true });
    t.string("country", { nullable: true });
    t.boolean("default_for_currency", { nullable: true });
    t.int("exp_month", { nullable: true });
    t.int("exp_year", { nullable: true });
    t.field("funding", { type: "CARD_FUNDING_TYPE" });
    t.string("last4", { nullable: true });
    t.string("name", { nullable: true });

    t.stripeObjectType({
      name: "Card",
      fields: [
        { name: "exp_month", alias: "custom_expMonth" },
        { name: "exp_year", alias: "custom_expYear" }
      ]
    });
  }
});
