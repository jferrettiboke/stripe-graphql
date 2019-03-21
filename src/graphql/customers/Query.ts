import { extendType, idArg } from "nexus";

export const CustomerQueries = extendType({
  type: "Query",
  definition(t) {
    t.list.field("customers", {
      type: "Customer",
      async resolve(root, args, context, info) {
        const { data } = await context.stripe.customers.list();
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
