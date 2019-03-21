const { objectType } = require("nexus");

const LegalEntity = objectType({
  name: "LegalEntity",
  definition(t) {
    t.field("type", {
      type: "LEGAL_ENTITY_TYPE",
      nullable: true
    });
    t.list.field("additional_owners", { type: "AdditionalOwner" });
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
    t.field("personal_address", {
      type: "Address",
      nullable: true
    });
    t.boolean("personal_id_number_provided", { nullable: true });
  }
});

module.exports = { LegalEntity };
