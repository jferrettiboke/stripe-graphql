import { interfaceType } from "nexus";

export const ProductInterface = interfaceType({
  name: "Product",
  definition(t) {
    t.id("id");
    t.string("object");
    t.string("type");
    t.resolveType(async product => {
      switch (product.type) {
        case "good":
          return "Good";
        case "service":
          return "Service";
        default:
          return null;
      }
    });
  }
});
