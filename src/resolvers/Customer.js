const Customer = {
  id: root => root.id,
  email: root => root.email,
  cards: async ({ id }, args, context) => {
    const { data } = await context.stripe.customers.listCards(id);
    return data;
  },
  bankAccounts: async ({ id }, args, context) => {
    const { data } = await context.stripe.customers.listSources(id, {
      object: "bank_account"
    });
    return data;
  }
};

module.exports = { Customer };
