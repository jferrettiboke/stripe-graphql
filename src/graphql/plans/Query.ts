import { extendType, idArg } from "nexus";

export const PlanQueries = extendType({
  type: "Query",
  definition(t) {
    t.list.field("plans", {
      type: "Plan",
      // @ts-ignore
      async resolve(root, args, context, info) {
        const { data } = await context.stripe.plans.list();
        return data;
      }
    });

    t.field("plan", {
      type: "Plan",
      nullable: true,
      args: {
        id: idArg({ required: true })
      },
      // @ts-ignore
      async resolve(root, { id }, context, info) {
        return await context.stripe.plans.retrieve(id);
      }
    });
  }
});
