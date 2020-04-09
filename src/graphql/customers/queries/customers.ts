import { queryField } from "@nexus/schema";
import { Customer } from "../Customer";

export const customers = queryField("customers", {
  type: Customer,
  list: true,
  resolve: async (root, args, context, info) => {
    const { data } = await context.stripe.customers.list();
    return data;
  },
});
