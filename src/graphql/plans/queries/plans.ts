import { queryField } from "@nexus/schema";

export const plansQueryField = queryField("plans", {
  type: "Plan",
  list: true,
  async resolve(root, args, context, info) {
    const { data } = await context.stripe.plans.list();
    return data;
  },
});
