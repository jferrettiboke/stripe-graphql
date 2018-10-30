const Platform = {
  async balance(root, args, context, info) {
    return await context.stripe.balance.retrieve();
  },

  async transactions(root, args, context, info) {
    const { data } = await context.stripe.balance.listTransactions({});
    return data;
  }
};

module.exports = { Platform };
