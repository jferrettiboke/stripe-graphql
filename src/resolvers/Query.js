const Query = {
  platform(root, args, context, info) {
    return {};
  },

  async customers(root, args, context, info) {
    const { data } = await context.stripe.customers.list();
    return data;
  },

  async customer(root, { id }, context, info) {
    return await context.stripe.customers.retrieve(id);
  },

  async connectedAccounts(root, args, context, info) {
    const { data } = await context.stripe.accounts.list();
    return data;
  },

  async connectedAccount(root, { id }, context, info) {
    return await context.stripe.accounts.retrieve(id);
  },

  async countrySpecs(root, { country }, context, info) {
    return await context.stripe.countrySpecs.retrieve(country);
  }
};

module.exports = { Query };
