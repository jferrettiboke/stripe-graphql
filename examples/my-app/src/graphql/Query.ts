import { queryType } from "yoga";

export const Query = queryType({
  definition(t) {
    t.list.field("customers", {
      type: "Customer",
      resolve: (root, args, context) => {
        // TODO
        return [];
      }
    });
  }
});
