import { interfaceType } from "nexus";

export const Node = interfaceType({
  name: "Node",
  description: "A Node is a resource with a globally unique identifier",
  definition(t) {
    t.id("id", {
      description: "Unique identifier for the object.",
      resolve: o => o.id
    });
    t.string("object", {
      description: "String representing the object's type.",
      resolve: o => o.object
    });
    t.resolveType(() => null);
  }
});
