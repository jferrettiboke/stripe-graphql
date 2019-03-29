import { objectType } from "nexus";

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.implements("Node");
    t.string("type");
    t.string("name");
  }
});
