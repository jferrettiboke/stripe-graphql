import { extendType, idArg } from "nexus";

export const ChargeQueries = extendType({
  type: "Query",
  definition(t) {
    t.list.field("charges", {
      type: "Charge",
      async resolve(root, args, context, info) {
        const { data } = await context.stripe.charges.list();
        return data;
      }
    });

    t.field("charge", {
      type: "Charge",
      nullable: true,
      args: {
        id: idArg({ required: true })
      },
      async resolve(root, { id }, context, info) {
        return await context.stripe.charges.retrieve(id);
      }
    });
  }
});
