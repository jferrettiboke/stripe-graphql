import { objectType } from "@nexus/schema";
import NodeInterface from "../NodeInterface";
import { MetadataInterface } from "../MetadataInterface";

export const Customer = objectType({
  name: "Customer",
  definition(t) {
    t.implements(NodeInterface, MetadataInterface);
  },
});
