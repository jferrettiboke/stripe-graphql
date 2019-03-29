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
        const { data } = await context.stripe.customers.list({
          ending_before: endingBefore,
          starting_after: startingAfter,
          limit
        });
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
