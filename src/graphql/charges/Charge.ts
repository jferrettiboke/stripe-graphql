import { objectType } from "nexus";

export const Charge = objectType({
  name: "Charge",
  definition(t) {
    t.string("id");
    t.int("amount", { nullable: true });
    t.string("currency", { nullable: true });
    t.string("status");
  }
});
