import { queryField, stringArg } from "@nexus/schema";
import { Balance } from "../Balance";

export const balance = queryField("balance", {
  type: Balance,
  resolve: async (root, args, context, info) => {
    return await context.stripe.balance.retrieve();
  },
});
