import { objectType } from "nexus";

export const Good = objectType({
  name: "Good",
  definition(t) {
    t.implements("Product", "Metadata");
    t.list.string("attributes", {
      description:
        'A list of up to 5 attributes that each SKU can provide values for (e.g., `["color", "size"]`). Only applicable to products of `type=good`.'
    });
    t.string("caption", {
      nullable: true,
      description:
        "A short one-line description of the product, meant to be displayable to the customer. Only applicable to products of `type=good`."
    });
    t.list.string("deactivate_on", {
      description:
        "An array of connect application identifiers that cannot purchase this product. Only applicable to products of `type=good`."
    });
    t.string("description", {
      nullable: true,
      description:
        "The product’s description, meant to be displayable to the customer. Only applicable to products of `type=good`."
    });
    t.list.string("images", {
      description:
        "A list of up to 8 URLs of images for this product, meant to be displayable to the customer. Only applicable to products of `type=good`."
    });
    t.field("package_dimensions", {
      type: "PackageDimensions",
      nullable: true,
      description:
        "The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own `package_dimensions`. Only applicable to products of `type=good`."
    });
    t.boolean("shippable", {
      description:
        "Whether this product is a shipped good. Only applicable to products of `type=good`."
    });
    t.string("url", {
      description:
        "A URL of a publicly-accessible webpage for this product. Only applicable to products of `type=good`."
    });
  }
});
