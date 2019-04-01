import { objectType } from "nexus";

export const Query = objectType({
  name: "Query",
  definition(t) {
    t.string("hello", () => "Hello world!");
  }
});
