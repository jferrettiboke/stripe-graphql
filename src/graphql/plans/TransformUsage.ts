import { objectType } from "nexus";

export const TransformUsage = objectType({
  name: "TransformUsage",
  definition(t) {
    t.int("divide_by", { description: "Divide usage by this number." });
    t.string("round", {
      description: "After division, either round the result `up` or `down`."
    });
  }
});
