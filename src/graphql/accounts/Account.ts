import { objectType } from "nexus";

export const Account = objectType({
  name: "Account",
  definition(t) {
    t.implements("Node");
    t.string("country");
    t.field("legal_entity", {
      type: "LegalEntity",
      nullable: true
    });
    t.field("verification", {
      type: "AccountVerification",
      nullable: true
    });
  }
});
