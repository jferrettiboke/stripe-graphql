import { objectType } from "nexus";

export const Good = objectType({
  name: "Good",
  definition(t) {
    t.implements("Product");
    t.list.string("attributes");
  }
});
