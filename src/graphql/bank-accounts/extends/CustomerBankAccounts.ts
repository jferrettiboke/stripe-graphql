import { extendType } from "@nexus/schema";
import { BankAccount } from "../BankAccount";

export const CustomerBankAccounts = extendType({
  type: "Customer",
  definition(t) {
    t.list.field("bankAccounts", {
      type: BankAccount,
      resolve: async ({ id }, args, context) => {
        const { data } = await context.stripe.customers.listSources(id, {
          object: "bank_account",
        });
        return data;
      },
    });
  },
});
