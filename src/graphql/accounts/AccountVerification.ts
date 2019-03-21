import { objectType } from "nexus";

export const AccountVerification = objectType({
  name: "AccountVerification",
  definition(t) {
    t.string("disabled_reason", { nullable: true });
    t.int("due_by", { nullable: true });
    t.string("fields_needed", {
      list: [false],
      nullable: true
    });
  }
});
