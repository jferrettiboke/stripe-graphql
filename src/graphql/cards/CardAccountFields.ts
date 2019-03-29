import { extendType } from "nexus";

export const CardAccountFields = extendType({
  type: "Account",
  definition(t) {
    t.list.field("cards", {
      type: "Card",
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.accounts.listExternalAccounts(
          id,
          {
            object: "card"
          }
        );
        return data;
      }
    });
  }
});
