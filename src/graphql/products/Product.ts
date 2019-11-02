import { interfaceType } from "nexus";

export const ProductInterface = interfaceType({
  name: "Product",
  definition(t) {
    t.id("id", { description: "Unique identifier for the object." });
    t.string("object", {
      description:
        "String representing the object’s type. Objects of the same type share the same value."
    });
    t.boolean("active", {
      description: "Whether the product is currently available for purchase."
    });
    t.int("created", {
      description:
        "Time at which the object was created. Measured in seconds since the Unix epoch."
    });
    t.boolean("livemode", {
      description:
        "Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode."
    });
    t.string("name", {
      description:
        "The product’s name, meant to be displayable to the customer. Applicable to both `service` and `good` types."
    });

    t.string("type", {
      description:
        "The type of the product. The product is either of type good, which is eligible for use with Orders and SKUs, or `service`, which is eligible for use with Subscriptions and Plans."
    });
    t.int("updated");
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
