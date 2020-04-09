import { interfaceType } from "@nexus/schema";

export const ProductInterface = interfaceType({
  name: "ProductInterface",
  definition(t) {
    t.boolean("active");
    t.int("created");
    t.boolean("livemode");
    t.string("name");
    t.string("type");
    t.int("updated");
    t.resolveType(async (product) => {
      switch (product.type) {
        case "good":
          return "Good";
        case "service":
          return "Service";
        default:
          return null;
      }
    });
  },
});

export default ProductInterface;
