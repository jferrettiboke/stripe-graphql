import { objectType } from "nexus";

export const Customer = objectType({
  name: "Customer",
  definition(t) {
    t.id("id");
    t.string("email", { nullable: true });
  }
});
