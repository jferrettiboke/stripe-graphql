import { objectType } from "nexus";

export const Account = objectType({
  name: "Account",
  definition(t) {
    t.id("id");
    t.string("country");

    t.field("legal_entity", {
      type: "LegalEntity",
      nullable: true
    });

    t.field("verification", {
      type: "AccountVerification"
    });
  }
});
