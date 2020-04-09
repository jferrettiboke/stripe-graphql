import { queryField } from "@nexus/schema";
import { BalanceTransaction } from "../BalanceTransaction";

export const balanceTransactions = queryField("balanceTransactions", {
  type: BalanceTransaction,
  list: true,
  resolve: async (root, args, context, info) => {
    const { data } = await context.stripe.balanceTransactions.list();
    return data;
  },
});
