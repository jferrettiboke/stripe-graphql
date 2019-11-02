import { objectType } from "nexus";

export const Service = objectType({
  name: "Service",
  definition(t) {
    t.implements("Product");
  }
});
