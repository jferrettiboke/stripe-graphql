import { objectType } from "nexus";

export const _Subscription = objectType({
  name: "_Subscription",
  definition(t) {
    t.implements("Node");
  }
});
