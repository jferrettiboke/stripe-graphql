import { queryField, stringArg } from "@nexus/schema";
import { Charge } from "../Charge";

export const charge = queryField("charge", {
  type: Charge,
  args: {
    id: stringArg({ required: true }),
  },
  resolve: async (root, args, context, info) => {
    return await context.stripe.charges.retrieve(args.id);
  },
});
