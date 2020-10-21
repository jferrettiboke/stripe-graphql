import { queryField, idArg } from "@nexus/schema";

export const planQueryField = queryField("subscriptions", {
  type: "Subscription",
  list: true,
  args: {
    customer: idArg({ required: false }),
  },
  async resolve(root, args, context, info) {
    const { data } = await context.stripe.subscriptions.list(args);
    return data;
  },
});
