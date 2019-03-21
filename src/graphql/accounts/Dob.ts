import { objectType } from "nexus";

export const Dob = objectType({
  name: "Dob",
  definition(t) {
    t.int("day", { nullable: true });
    t.int("month", { nullable: true });
    t.int("year", { nullable: true });
  }
});
