import { extendType } from "nexus";

export const AccountBalance = extendType({
  type: "Account",
  definition(t) {
    t.field("balance", {
      type: "Balance",
      async resolve({ id }, args, context) {
        return await context.stripe.balance.retrieve({ stripe_account: id });
      }
    });
  }
});
