import { interfaceType } from "nexus";

export const Metadata = interfaceType({
  name: "Metadata",
  description: "Metadata interface type.",
  definition(t) {
    t.list.field("metadata", {
      type: "MetadataType",
      description:
        "Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.",
      resolve: o =>
        Object.entries(o.metadata).map(([key, value]) => {
          return {
            key,
            value
          };
        })
    });
    t.resolveType(() => null);
  }
});
