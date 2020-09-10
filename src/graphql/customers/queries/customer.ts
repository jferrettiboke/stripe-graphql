import { queryField, stringArg } from "@nexus/schema";
import { Customer } from "../Customer";

export const customer = queryField("customer", {
  type: Customer,
  args: {
    id: stringArg({ required: true }),
  },
  resolve: async (root, args, context, info) => {
    const customers = await context.stripe.customers.retrieve(args.id);
    console.log(customers)
    return customers
  },
});
