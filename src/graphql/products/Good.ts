import { objectType } from "@nexus/schema";
import NodeInterface from "../NodeInterface";
import { ProductInterface } from "./ProductInterface";
import { PackageDimensions } from "./PackageDimensions";

export const Good = objectType({
  name: "Good",
  definition(t) {
    t.implements(NodeInterface, ProductInterface);
    t.list.string("attributes");
    t.string("caption", { nullable: true });
    t.list.string("deactivate_on");
    t.string("description", { nullable: true });
    t.list.string("images");
    t.field("package_dimensions", { type: PackageDimensions, nullable: true });
    t.boolean("shippable");
    t.string("url");
  },
});
