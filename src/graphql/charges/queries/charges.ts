import { queryField } from "@nexus/schema";
import { Charge } from "../Charge";

export const charges = queryField("charges", {
  type: Charge,
  list: true,
  resolve: async (root, args, context, info) => {
    const { data } = await context.stripe.charges.list();
    return data;
  },
});
