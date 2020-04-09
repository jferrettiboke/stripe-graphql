import { interfaceType, objectType } from "@nexus/schema";

const Metadata = objectType({
  name: "Metadata",
  definition(t) {
    t.string("key");
    t.string("value");
  },
});

export const MetadataInterface = interfaceType({
  name: "MetadataInterface",
  definition(t) {
    t.list.field("metadata", {
      type: Metadata,
      resolve: (o) => {
        return Object.entries(o.metadata).map(([key, value]) => {
          return {
            key,
            value,
          };
        });
      },
    });
    t.resolveType(() => null);
  },
});
