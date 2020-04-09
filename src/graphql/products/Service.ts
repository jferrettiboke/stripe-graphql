import { objectType } from "@nexus/schema";
import NodeInterface from "../NodeInterface";
import ProductInterface from "./ProductInterface";

export const Service = objectType({
  name: "Service",
  definition(t) {
    t.implements(NodeInterface, ProductInterface);
    t.string("statement_descriptor", { nullable: true });
    t.string("unit_label", { nullable: true });
  },
});
