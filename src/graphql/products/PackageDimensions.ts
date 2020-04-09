import { objectType } from "@nexus/schema";

export const PackageDimensions = objectType({
  name: "PackageDimensions",
  definition(t) {
    t.float("height");
    t.float("length");
    t.float("weight");
    t.float("width");
  },
});
