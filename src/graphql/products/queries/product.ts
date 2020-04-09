import { queryField, idArg } from "@nexus/schema";
import ProductInterface from "../ProductInterface";

export const productQueryField = queryField("product", {
  type: ProductInterface,
  nullable: true,
  args: {
    id: idArg({ required: true }),
  },
  async resolve(root, args, context, info) {
    return await context.stripe.products.retrieve(args.id);
  },
});
