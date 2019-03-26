import { extendType, idArg } from "nexus";

export const AccountQueries = extendType({
  type: "Query",
  definition(t) {
    t.field("platform", {
      type: "Account",
      async resolve(root, args, context, info) {
        return await context.stripe.accounts.retrieve();
      }
    });

    t.list.field("accounts", {
      type: "Account",
      async resolve(root, args, context, info) {
        const { data } = await context.stripe.accounts.list();
        return data;
      }
    });

    t.field("account", {
      type: "Account",
      nullable: true,
      args: {
        id: idArg({ required: true })
      },
      async resolve(root, { id }, context, info) {
        return await context.stripe.accounts.retrieve(id);
      }
    });
  }
});
