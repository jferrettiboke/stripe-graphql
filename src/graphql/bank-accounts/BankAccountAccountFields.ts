import { extendType } from "nexus";

export const BankAccountAccountFields = extendType({
  type: "Account",
  definition(t) {
    t.list.field("bankAccounts", {
      type: "BankAccount",
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.accounts.listExternalAccounts(
          id,
          {
            object: "bank_account"
          }
        );
        return data;
      }
    });
  }
});
