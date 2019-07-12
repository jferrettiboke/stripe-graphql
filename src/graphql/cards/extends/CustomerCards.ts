import { extendType } from "nexus";

export const CustomerCards = extendType({
  type: "Customer",
  definition(t) {
    t.list.field("cards", {
      type: "Card",
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.customers.listSources(id, {
          object: "card"
        });
        return data;
      }
    });
  }
});
