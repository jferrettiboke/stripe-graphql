import { objectType } from "nexus";

export const Customer = objectType({
  name: "Customer",
  definition(t) {
    t.id("id");
    t.string("email", { nullable: true });
    t.list.field("cards", {
      type: "Card",
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.customers.listCards(id);
        return data;
      }
    });
    t.list.field("bankAccounts", {
      type: "BankAccount",
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.customers.listSources(id, {
          object: "bank_account"
        });
        return data;
      }
    });
    t.list.field("charges", {
      type: "Charge",
      async resolve({ id }, args, context) {
        const { data } = await context.stripe.charges.list({ customer: id });
        return data;
      }
    });
  }
});
