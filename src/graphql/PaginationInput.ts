import { inputObjectType } from "@nexus/schema";

export const PaginationInput = inputObjectType({
  name: "PaginationInput",
  definition(t) {
    t.int("limit", { required: true, default: 0 });
    t.string("starting_after");
    t.string("ending_before");
  },
});

export default PaginationInput;
