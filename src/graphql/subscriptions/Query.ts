import { extendType, idArg } from "nexus";

export const SubscriptionrQueries = extendType({
  type: "Query",
  definition(t) {
    t.list.field("subscriptions", {
      type: "_Subscription",
      async resolve(root, args, context, info) {
        const { data } = await context.stripe.subscriptions.list();
        return data;
      }
    });

    t.field("subscription", {
      type: "_Subscription",
      nullable: true,
      args: {
        id: idArg({ required: true })
      },
      async resolve(root, { id }, context, info) {
        return await context.stripe.subscriptions.retrieve(id);
      }
    });
  }
});
