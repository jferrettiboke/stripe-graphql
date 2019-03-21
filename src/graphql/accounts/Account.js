const { objectType } = require("nexus");

const Account = objectType({
  name: "Account",
  definition(t) {
    t.id("id");
    t.string("country");
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
    t.field("legal_entity", {
      type: "LegalEntity",
      nullable: true
    });
    t.field("verification", { type: "AccountVerification" });
    t.field("balance", {
      type: "Balance",
      async resolve({ id }, args, context, info) {
        return await context.stripe.balance.retrieve({ stripe_account: id });
      }
    });
    t.list.field("transactions", {
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

module.exports = { Account };
