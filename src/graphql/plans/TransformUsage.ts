import { objectType } from "@nexus/schema";

export const TransformUsage = objectType({
  name: "TransformUsage",
  definition(t) {
    t.int("divide_by");
    t.string("round");
  },
});
