import { objectType } from "nexus";

export const MetadataType = objectType({
  name: "MetadataType",
  definition(t) {
    t.string("key");
    t.string("value");
  }
});
