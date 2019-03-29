import { extendType } from "nexus";

export const CustomerBankAccounts = extendType({
  type: "Customer",
  definition(t) {
    t.list.field("bankAccounts", {
      type: "BankAccount",
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.customers.listSources(id, {
          object: "bank_account"
        });
        return data;
      }
    });
  }
});
