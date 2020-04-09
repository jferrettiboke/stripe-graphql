import { queryField, stringArg } from "@nexus/schema";
import { BalanceTransaction } from "../BalanceTransaction";

export const balanceTransaction = queryField("balanceTransaction", {
  type: BalanceTransaction,
  args: {
    id: stringArg({ required: true }),
  },
  resolve: async (root, args, context, info) => {
    return await context.stripe.balanceTransactions.retrieve(args.id);
  },
});
