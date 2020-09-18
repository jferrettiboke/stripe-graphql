import { queryField, idArg } from "@nexus/schema";

export const subscriptionQueryField = queryField("subscription", {
  type: "Subscription",
  nullable: true,
  args: {
    id: idArg({ required: true }),
  },
  async resolve(root, args, context, info) {
    return await context.stripe.subscriptions.retrieve(args.id);
  },
});
