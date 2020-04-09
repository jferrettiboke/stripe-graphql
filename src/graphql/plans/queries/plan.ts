import { queryField, idArg } from "@nexus/schema";

export const planQueryField = queryField("plan", {
  type: "Plan",
  nullable: true,
  args: {
    id: idArg({ required: true }),
  },
  async resolve(root, { id }, context, info) {
    return await context.stripe.plans.retrieve(id);
  },
});
