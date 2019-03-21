import { objectType } from "nexus";

export const AdditionalOwner = objectType({
  name: "AdditionalOwner",
  definition(t) {
    t.field("address", {
      type: "Address",
      nullable: true
    });
    t.field("dob", {
      type: "Dob",
      nullable: true
    });
    t.string("first_name", { nullable: true });
    t.string("last_name", { nullable: true });
    t.string("maiden_name", { nullable: true });
    t.boolean("personal_id_number_provided");
  }
});
