import { objectType } from "nexus";

export const PackageDimensions = objectType({
  name: "PackageDimensions",
  definition(t) {
    t.float("height", { description: "Height, in inches." });
    t.float("length", { description: "Length, in inches." });
    t.float("weight", { description: "Weight, in ounces." });
    t.float("width", { description: "Width, in inches." });
  }
});
