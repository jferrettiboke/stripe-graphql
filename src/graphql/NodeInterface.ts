import { interfaceType } from "@nexus/schema";

export const NodeInterface = interfaceType({
  name: "NodeInterface",
  definition(t) {
    t.id("id");
    t.string("object");
    t.resolveType(() => null);
  },
});

export default NodeInterface;
