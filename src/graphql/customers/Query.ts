import { extendType, idArg, intArg, stringArg } from "nexus";

export const CustomerQueries = extendType({
  type: "Query",
  definition(t) {
    t.list.field("customers", {
      type: "Customer",
      args: {
        endingBefore: stringArg(),
        startingAfter: stringArg(),
        limit: intArg()
      },
      async resolve(
        root,
        { endingBefore, startingAfter, limit },
        context,
        info
      ) {
        let options = {};
        if (startingAfter) {
          options = { ...options, starting_after: startingAfter };
        }
        if (endingBefore) {
          options = { ...options, ending_before: endingBefore };
        }
        if (limit) {
          options = { ...options, limit };
        }
        const { data } = await context.stripe.customers.list(options);
        return data;
      }
    });

    t.field("customer", {
      type: "Customer",
      nullable: true,
      args: {
        id: idArg({ required: true })
      },
      async resolve(root, { id }, context, info) {
        return await context.stripe.customers.retrieve(id);
      }
    });
  }
});
