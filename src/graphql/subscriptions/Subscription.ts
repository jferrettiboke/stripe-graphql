import { objectType } from "nexus";

export const _Subscription = objectType({
  name: "_Subscription",
  definition(t) {
    t.id("id");
    t.string("object");
  }
});
