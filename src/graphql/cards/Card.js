const { objectType } = require("nexus");

const Card = objectType({
  name: "Card",
  definition(t) {
    t.id("id");
    t.string("address_city", { nullable: true });
    t.string("address_country", { nullable: true });
    t.string("address_line1", { nullable: true });
    t.string("address_line1_check", { nullable: true });
    t.string("address_line2", { nullable: true });
    t.string("address_state", { nullable: true });
    t.string("address_zip", { nullable: true });
    t.string("address_zip_check", { nullable: true });
    t.string("brand", { nullable: true });
    t.string("country", { nullable: true });
    t.string("customer", { nullable: true });
    t.string("cvc_check", { nullable: true });
    t.boolean("default_for_currency", { nullable: true });
    t.string("dynamic_last4", { nullable: true });
    t.int("exp_month", { nullable: true });
    t.int("exp_year", { nullable: true });
    t.string("fingerprint", { nullable: true });
    t.field("funding", { type: "CARD_FUNDING_TYPE" });
    t.string("last4", { nullable: true });
    t.string("name", { nullable: true });
    t.string("tokenization_method", { nullable: true });
  }
});

module.exports = { Card };
