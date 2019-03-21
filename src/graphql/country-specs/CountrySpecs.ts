import { objectType } from "nexus";

export const CountrySpec = objectType({
  name: "CountrySpec",
  definition(t) {
    t.string("id", { nullable: true });
    t.string("object", { nullable: true });
    t.string("default_currency", { nullable: true });
    t.field("verification_fields", { type: "AccountVerificationFields" });
  }
});
