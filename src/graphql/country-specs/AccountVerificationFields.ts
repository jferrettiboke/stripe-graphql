import { objectType } from "nexus";

export const AccountVerificationFields = objectType({
  name: "AccountVerificationFields",
  definition(t) {
    t.field("individual", { type: "VerificationFields" });
    t.field("company", { type: "VerificationFields" });
  }
});
