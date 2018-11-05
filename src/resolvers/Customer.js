const Customer = {
  async cards({ id }, args, context) {
    const { data } = await context.stripe.customers.listCards(id);
    return data;
  },

  async bankAccounts({ id }, args, context) {
    const { data } = await context.stripe.customers.listSources(id, {
      object: "bank_account"
    });
    return data;
  },

  async charges({ id }, args, context) {
    const { data } = await context.stripe.charges.list({ customer: id });
    return data;
  }
};

module.exports = { Customer };
