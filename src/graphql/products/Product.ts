import { objectType } from "nexus";

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.id("id");
    t.string("type");
    t.string("name");
  }
});
