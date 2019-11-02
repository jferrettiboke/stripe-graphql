import { queryField, idArg } from "nexus";

export const productQueryField = queryField("product", {
  type: "Product",
  nullable: true,
  args: {
    id: idArg({ required: true })
  },
  async resolve(root, { id }, context, info) {
    return await context.stripe.products.retrieve(id);
  }
});
