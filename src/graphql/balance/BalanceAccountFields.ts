import { extendType } from "nexus";

export const BalanceAccountFields = extendType({
  type: "Account",
  definition(t) {
    t.field("balance", {
      type: "Balance",
      async resolve({ id }, args, context, info) {
        return await context.stripe.balance.retrieve({ stripe_account: id });
      }
    });

    t.list.field("balanceTransactions", {
      type: "BalanceTransaction",
      async resolve({ id }, args, context, info) {
        const { data } = await context.stripe.balance.listTransactions({
          stripe_account: id
        });
        return data;
      }
    });
  }
});
