const ConnectedAccount = {
  id: root => root.id,
  cards: async ({ id }, args, context) => {
    const { data } = await context.stripe.accounts.listExternalAccounts(id, {
      object: "card"
    });
    return data;
  },
  bankAccounts: async ({ id }, args, context) => {
    const { data } = await context.stripe.accounts.listExternalAccounts(id, {
      object: "bank_account"
    });
    return data;
  }
};

module.exports = { ConnectedAccount };
