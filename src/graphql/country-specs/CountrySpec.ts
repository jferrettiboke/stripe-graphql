import { objectType } from "nexus";

export const CountrySpec = objectType({
  name: "CountrySpec",
  definition(t) {
    t.string("id", { nullable: true });
    t.string("object", { nullable: true });
    // t.currency("defaultCurrency", {
    //   nullable: true,
    //   resolve: o => o.default_currency
    // });
    t.field("verificationFields", {
      type: "AccountVerificationFields",
      resolve: o => o.verification_fields
    });
  }
});
