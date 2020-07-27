import { extendType } from "@nexus/schema";
import { Card } from "../Card";

export const CustomerCards = extendType({
  type: "Customer",
  definition(t) {
    t.list.field("cards", {
      type: Card,
      resolve: async ({ id }, args, context) => {
        const { data } = await context.stripe.customers.listSources(id, {
          object: "card",
        });
        return data;
      },
    });
  },
});
