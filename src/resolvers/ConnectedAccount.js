const ConnectedAccount = {
  async balance({ id }, args, context, info) {
    return await context.stripe.balance.retrieve({ stripe_account: id });
  },

  async transactions({ id }, args, context, info) {
    const { data } = await context.stripe.balance.listTransactions({
      stripe_account: id
    });
    return data;
  },

  async cards({ id }, args, context) {
    const { data } = await context.stripe.accounts.listExternalAccounts(id, {
      object: "card"
    });
    return data;
  },

  async bankAccounts({ id }, args, context) {
    const { data } = await context.stripe.accounts.listExternalAccounts(id, {
      object: "bank_account"
    });
    return data;
  }
};

module.exports = { ConnectedAccount };
